<template>
  <div class="container mx-auto">
    <div>
      <h1 class="text-xl md:text-3xl text-center font-briem py-6">
        Similar Posts
      </h1>
    </div>

    <div v-if="similarPosts" class="flex flex-wrap w-full">
      <main
        v-for="(posts, index) in similarPosts"
        :key="posts.id"
        class="w-full sm:w-1/2 lg:w-1/3 my-8 px-4"
      >
        <PostCard :post="posts" :index="index" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from "vue";
import PostCard from "../../components/post-card.vue";

const randomStartPoint = Math.floor(Math.random() * 100);
const similarPosts = ref([]);

const getPostData = async () => {
  const { data, pending } = await useFetch("/api/posts", {
    query: {
      limit: 3,
      offset: randomStartPoint,
      include: "user",
      select: "id,title,excerpt,publishedAt,image",
    },
  });
  similarPosts.value = data.value;
};

getPostData();
</script>
