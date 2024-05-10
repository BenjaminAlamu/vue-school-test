// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "nuxt-phosphor-icons",
  ],
  nitro: {
    experimental: {
      database: true,
    },
  },
  routeRules: {
    "/": {
      ssr: false,
    },
    "/posts": { swr: 3600 },
    "/posts/**": { swr: 3600 },
  },
  fonts: {
    families: [
      { name: "Briem Hand", provider: "google" },
      { name: "Teachers", provider: "google" },
    ],
  },
  image: {
    alias: {
      picsum: "https://picsum.photos",
      pravatar: "https://i.pravatar.cc",
    },
  },
  site: {
    url: "http://localhost:3000",
    name: "Vue School Blog",
    description: "Test by Benjamin Alamu for Vue School",
  },
});
