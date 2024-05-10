<template>
  <div class="container mx-auto">
    <div>
      <h1 class="text-2xl md:text-5xl text-center font-briem py-6">
        Vue School Blog
      </h1>
    </div>

    <PostFilters
      @toggleSort="toggleSortMode($event)"
      :activeSort="activeSortParams"
    />
    <SkeletonCard v-if="pending" />
    <div class="flex flex-wrap w-full">
      <main
        v-for="(posts, index) in postData"
        :key="posts.id"
        class="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 my-8 px-4"
      >
        <PostCard :post="posts" :index="index" />
      </main>
    </div>
    <p ref="scrollerTarget"></p>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from "vue";
import PostCard from "../../components/post-card.vue";
import SkeletonCard from "../../components/skeleton-card.vue";
import PostFilters from "../../components/post-filters.vue";
import { useInfiniteScroll } from "@vueuse/core";

const route = useRoute();
const router = useRouter();

const queryParams = useRoute().query;

const scrollerTarget = ref(null);
const activeSortParams = ref(queryParams?.order || "newestFirst");
const postData = ref([]);

const getPostData = async (offset) => {
  const { data, pending } = await useFetch("/api/posts", {
    query: {
      limit: 12,
      offset,
      include: "user",
      order: activeSortParams.value,
      select: "id,title,excerpt,publishedAt,image",
    },
  });
  postData.value = [...postData.value, ...toRaw(data.value)];
};

const getUsersOnScroll = async () => {
  getPostData(postData.value.length);
};

const toggleSortMode = async (value: string) => {
  activeSortParams.value = value;
  await router.push({
    query: {
      ...route.query,
      order: activeSortParams.value,
    },
  });
  postData.value = [];
  getPostData();
};

getPostData();

useInfiniteScroll(scrollerTarget, async () => {
  await getUsersOnScroll();
});
</script>
