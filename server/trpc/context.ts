import { inferAsyncReturnType } from "@trpc/server";

import { useDrizzle } from "../db";
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = () => {
  const db = useDrizzle();

  return {
    db,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
