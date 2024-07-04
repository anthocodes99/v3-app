// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  // do `pnpm dev` if typescript error
  // tailwindcss does not exist in type InputConfig<NuxtConfig>
  tailwindcss: {
    // https://tailwindcss.nuxtjs.org/getting-started/configuration
    exposeConfig: true,
    viewer: true,
  },
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ["trpc-nuxt"],
  },
});
