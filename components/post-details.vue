<template>
  <div class="flex w-full justify-between items-center font-teachers text-xs">
    <main class="flex items-center gap-x-2">
      <NuxtPicture
        width="25"
        height="25"
        :alt="user?.firstName + ' ' + user?.lastName"
        :img-attrs="{ class: 'rounded-full' }"
        loading="lazy"
        v-if="user?.avatar"
        :src="user?.avatar"
      ></NuxtPicture>
      <p class="font-semibold">{{ user?.firstName }} {{ user?.lastName }}</p>
    </main>
    <p>{{ useDateFormat(publishedAt, "MMM Do, YYYY").value }}</p>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { User } from "@/types";

const props = defineProps({
  user: User,
  publishedAt: Number,
});
</script>
