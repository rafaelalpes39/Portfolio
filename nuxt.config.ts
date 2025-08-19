// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],
  app: {
    head: {
      title: "Hi, I am Rafael Alpes !",
      link: [{ rel: "icon", type: "image/png", href: "/logo.jpg" }],
    },
  },
});
