// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Human Resources",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/dotenv",
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwind",
  ],
});
