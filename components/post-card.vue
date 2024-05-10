<template>
  <main class="rounded-lg shadow-lg">
    <NuxtLink :to="`/posts/${post.id}`">
      <NuxtImg
        sizes="100vw md:50vw lg:33vw"
        class="rounded-t-lg"
        width="1920"
        height="1080"
        :alt="post.title"
        :src="post.image"
        :loading="index < 4 ? 'eager' : 'lazy'"
        :preload="index < 3 ? true : false"
      />
      <main class="p-4 text-primary">
        <p class="text-xl md:text-3xl truncate font-briem">
          {{ post?.title }}
        </p>
        <p class="text-sm my-2 h-14 font-teachers line-clamp-2">
          {{ post.excerpt }}
        </p>
        <PostDetails :user="post.user" :publishedAt="post.publishedAt" />
      </main>
    </NuxtLink>
  </main>
</template>

<script setup lang="ts">
import PostDetails from "./post-details.vue";
import type { Post } from "~/types";

defineProps<{
  post: Post;
  index: number;
}>();
</script>
