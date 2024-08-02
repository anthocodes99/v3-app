import { router, mergeRouters } from "../trpc";

import { helloRouter } from "./hello";
import { postRouter } from "./posts";

export const subRouters = router({
  // You can also add sub-routers in custom namespace here.
  post: postRouter,
});

// All sub-routers are merged together here.
export const appRouter = mergeRouters(helloRouter, subRouters);

// export type definition of API
export type AppRouter = typeof appRouter;
