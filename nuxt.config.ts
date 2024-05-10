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
  },
  fonts: {
    families: [
      { name: "Briem Hand", provider: "google" },
      { name: "Teachers", provider: "google" },
    ],
  },
});
