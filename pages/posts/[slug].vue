<template>
  <div class="container mx-auto font-teachers my-6">
    <div
      class="cursor-pointer flex text-md items-center px-4"
      @click="router.go(-1)"
    >
      <PhSkipBack :size="24" />
      <p>Go back</p>
    </div>
    <h1 class="text-3xl md:text-6xl lg:mb-10 font-bold mb-6 font-briem">
      {{ post.title }}
    </h1>
    <div class="flex justify-center flex-col gap-4">
      <NuxtImg
        v-if="post.image"
        :src="post.image"
        sizes="100vw md:50vw lg:33vw"
        width="1920"
        height="1080"
        class="rounded-lg"
        :preload="true"
      />

      <div>
        <PostDetails :user="post.user" :publishedAt="post.publishedAt" />
      </div>
    </div>

    <div class="prose max-w-none mb-6" v-html="post.content"></div>

    <SimilarPosts />
  </div>
</template>

<script setup lang="ts">
import { PhSkipBack } from "@phosphor-icons/vue";
import PostDetails from "@/components/post-details.vue";
import SimilarPosts from "@/components/similar-posts.vue";
const slug = useRoute().params.slug;
const router = useRouter();

const {
  data: post,
  error,
  pending,
} = await useFetch(`/api/posts/${slug}`, {
  query: {
    include: "user",
    select: "id,title,content,publishedAt,image,content,excerpt",
  },
});

if (!pending && (!post || !post.value || error || error.value)) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

useSeoMeta({
  description: post.value.excerpt,
  twitterTitle: post.value.title,
  twitterDescription: post.value.excerpt,
  twitterImage: post.value.image,
  twitterCard: "summary",
  ogImage: post.value.image,
  title: post.value.title,
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
