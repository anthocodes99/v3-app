import { defineConfig } from "drizzle-kit";
import { z } from "zod";

// https://orm.drizzle.team/kit-docs/conf
export default defineConfig({
  schema: "./server/db/schema.ts",
  out: "./server/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: z.string().parse(process.env.DATABASE_URL),
  },
  tablesFilter: ['v3-app_*']
});
