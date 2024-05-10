<template>
  <div class="flex flex-wrap w-full">
    <div
      v-for="i in 12"
      :key="i"
      class="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 my-8 px-4"
    >
      <div class="rounded-lg shadow-lg bg-gray-200 h-80 animate-pulse"></div>
    </div>
  </div>
</template>
