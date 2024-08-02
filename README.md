# v3-app (WIP)

> [!IMPORTANT] 
> This project is still in it's infancy. Nothing is here yet.

## Installation

Start by downloading this repository:
```
$ pnpm dlx giget@latest gh:anthocodes99/v3-app v3-app --install
```
This will download the repository into the folder `v3-app`, and install the pakacges.

<!-- todo -->
Next, get a Postgres server running.

Make a copy of `.env.example` file and rename it to `.env`, then update the `DATABASE_URL` to the running Postgres URL.

Then, generate and push the schema to the database.
```
$ pnpm db:generate
$ pnpm db:push
```
This will generate and update the tables on the Postgres database.

Finally, start the local server
```
$ pnpm dev
```

Inspired by Theo's t3-app.

- [x] Add `tailwindcss`
- [x] Add `drizzle`
- [x] Add `zod`
- [x] Add `postgres`
- [X] Add `tRPC`
- [X] Add `@tanstack/vue-query`

- [x] add schema
- [x] add endpoints
- [ ] add typesafe environment variables