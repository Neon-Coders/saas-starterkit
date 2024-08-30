FROM node:20-slim AS base

FROM base AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

ARG DATABASE_URL
ARG HOST_NAME
ARG STRIPE_API_KEY
ARG STRIPE_WEBHOOK_SECRET
ARG STRIPE_PRO_MONTHLY_PLAN_ID
ARG NEXT_PUBLIC_STRIPE_KEY
ARG NEXT_PUBLIC_STRIPE_MANAGE_URL
ARG NEXT_PUBLIC_PRICE_ID_BASIC
ARG NEXT_PUBLIC_PRICE_ID_PREMIUM
ARG MOCK_SEND_EMAIL
ARG SMTP_PORT
ARG SMTP_HOST
ARG SMTP_USER
ARG SMTP_PASSWORD

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/drizzle ./drizzle
COPY --from=builder --chown=nextjs:nodejs /app/run.sh ./run.sh

RUN cd drizzle/migrate && npm i

WORKDIR /app

USER nextjs

EXPOSE 3000

ENV PORT=3000

ARG HOSTNAME

CMD ./run.sh