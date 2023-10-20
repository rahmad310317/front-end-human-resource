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

  css: ["~/assets/css/main.css"],

  // Add Tailwind to your PostCSS configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios", "@nuxtjs/auth-next"],
});
