// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Human Resource",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width-device-width, initial-scale-1" },
        { hid: "description", name: "description", content: "Human Resource" },
      ],
    },
  },

  // modules
  modules: ["@nuxtjs/tailwindcss"],
});
