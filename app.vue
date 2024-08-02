<script setup lang="ts">
import { useQueryClient, useQuery, useMutation } from "@tanstack/vue-query";

const { $client } = useNuxtApp();
const queryClient = useQueryClient();

type PostData = {
  name: string;
  text: string;
};

const { data: hello } = await $client.hello.useQuery({
  text: "from TRPC",
});

// This is a
const { data: posts, suspense } = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    const { data } = await $client.post.list.query();
    return data;
  },
});

const mutationAddPost = useMutation({
  mutationFn: async (data: PostData) => {
    await $client.post.add.mutate({ ...data });
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  },
});

function addPost(e: Event) {
  const data = Object.fromEntries(
    new FormData(e.target! as HTMLFormElement)
  ) as PostData;
  mutationAddPost.mutate({ ...data });
}

await suspense();
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
    <div class="flex flex-col max-w-md mx-auto gap-4 mt-16 items-center">
      <div v-if="false">
        <h3 class="text-white text-xl">No Posts.</h3>
        <p class="text-white text-md">Why not add a post about chairs below?</p>
      </div>
      <div
        v-else
        class="w-full bg-gray-800 p-2 rounded-md"
        v-for="post in posts"
        :key="post.id"
      >
        <h3 class="text-[#00dc82] text-xl text-left">{{ post.name }}</h3>
        <p class="text-white text-left mt-2">{{ post.text }}</p>
      </div>
      <form class="flex flex-col gap-4 mt-8" @submit.prevent="addPost">
        <div class="grid grid-cols-3">
          <label class="col-span-1 text-white text-left" for="name">Name</label>
          <input
            class="col-span-2 p-2 bg-gray-800 text-white rounded-md"
            type="text"
            name="name"
            id=""
          />
        </div>
        <div class="grid grid-cols-3">
          <input
            class="col-span-3 p-2 w-full h-32 bg-gray-800 text-white rounded-md text-wrap"
            type="text"
            name="text"
            id=""
            placeholder="Make a post (eg: about chairs!)"
          />
        </div>
        <input
          class="p-2 bg-[#00dc82] hover:bg-[#28e697] rounded-md cursor-pointer transition duration-100"
          type="submit"
          value="Post"
        />
      </form>
    </div>
  </div>
</template>
