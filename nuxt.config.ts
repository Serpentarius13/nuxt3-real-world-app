// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@vue-macros/nuxt",
    "nuxt-icons",
    "@vee-validate/nuxt",
  ],

  css: ["@/styles/main.scss"],
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:7000/training",
    },
  },
});