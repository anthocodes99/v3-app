import { useDrizzle } from "~/server/db"

export default defineEventHandler(async (event) => {
    const rows = await useDrizzle().query.posts.findMany()
    return {
        posts: rows,
    }
})