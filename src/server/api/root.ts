import { createTRPCRouter } from "./trpc";
import { userRouter } from "./routers/user/user.procedure";
import { stripeRouter } from "./routers/stripe/stripe.procedure";

export const appRouter = createTRPCRouter({
  user: userRouter,
  stripe: stripeRouter,
});

export type AppRouter = typeof appRouter;
