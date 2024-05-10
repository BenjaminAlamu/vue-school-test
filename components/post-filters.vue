<template>
  <div class="flex w-full justify-end items-center font-teachers text-sm px-4">
    <p>Sort Posts:</p>
    <PhArrowUp
      class="cursor-pointer"
      :weight="activeSort === 'newestFirst' ? 'bold' : 'regular'"
      @click="$emit('toggleSort', 'newestFirst')"
      :size="16"
    />
    <PhArrowDown
      class="cursor-pointer"
      :weight="activeSort === 'oldestFirst' ? 'bold' : 'regular'"
      @click="$emit('toggleSort', 'oldestFirst')"
      :size="16"
    />
  </div>
</template>

<script setup>
import { PhArrowUp, PhArrowDown } from "@phosphor-icons/vue";

const emit = defineEmits(["toggleSort"]);

const props = defineProps({
  activeSort: String,
});
</script>
