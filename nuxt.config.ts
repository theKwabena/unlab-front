// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/fonts", "@pinia/nuxt"],
  compatibilityDate: "2024-09-12",
  colorMode: {
    preference: 'dark'
  },
  fonts: {
    families: [
      {
        name: 'IBM Plex Mono', provider:'google'
      }
    ]
  },
  ssr: false
})