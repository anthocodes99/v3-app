<script setup lang="ts">
const { $client } = useNuxtApp();

const { data: hello } = await $client.hello.useQuery({
  text: "from TRPC",
});
</script>

<template>
  <div class="max-w-2xl mx-auto mt-24 items-center text-center">
    <h1 class="text-7xl font-bold text-center text-white">
      Create <span class="text-[#00dc82]">V3</span> App
    </h1>
    <div class="text-center text-white mt-12">
      Nuxt + TailwindCSS + tRPC + Drizzle + Zod + Postgres
    </div>
    <p class="mt-4 text-2xl text-white">{{ hello?.greeting }}</p>
    <p class="mt-4 text-gray-400">This is a Work in Progress.</p>
  </div>
</template>
