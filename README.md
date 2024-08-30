# SAAS Starter kit

Heads up! This starter kit is a work in progress. I'm sharing it early in case it's useful, but it's not quite polished yet.  If you spot any bugs or have ideas for improvements, feel free to contribute!

## Welcome to the Starter Kit

🚀 Kickstart your SaaS journey with this powerful GitHub template. We've packed it with essential technologies to give your product a solid foundation:

- Authentication (Lucia)
- Authorization
- Subscription Management (Stripe)
- Stripe Integration / Webhooks
- Drizzle ORM
- Shadcn/ui
- TailwindCSS

## Contributing

If you find obvious issues with this starter kit, feel free to submit a pull request or submit and issue. We want to keep this starter simple with the core technology picked, so we don't recommend trying to add in various things without prior approval.

## How to Get Started

Start by clicking the "use this template" button on the github repo. We suggest creating a new repository so you can track your code changes. After, clone your own repository down to your computer and start working on it.

### Prerequisites

This starter kit does uses Docker and Docker Compose to run a postgres database, so you will need to either have those installed, or modify the project to point to a hosted database solution.

## How to Run

1. `cp .env.sample .env`
2. `npm i`
3. `docker compose up`
4. `npm run db:migrate`
5. `npm run dev`

## Database

This starter kit uses postgres. Supabase provides 2 free postgres database. Setup a database and get your **DATABASE_URL**.

## HOST_NAME

When deplying to production, you want to set HOST_NAME to your FQDN, such as `https://you-domain.com`
