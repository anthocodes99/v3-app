import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import {posts} from "~/server/db/schema";

export const postRouter = router({
  list: publicProcedure
    .query(async ({ ctx }) => {
      return {
        data: await ctx.db.query.posts.findMany()
      };
    }),
  add: publicProcedure.input(z.object({
    name: z.string(),
    text: z.string(),
  })).mutation(async ({input, ctx}) => {
    await ctx.db.insert(posts).values(input)
  })
});

// export type definition of API
export type HelloRouter = typeof postRouter;
