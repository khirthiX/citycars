import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Enable SSR
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ["@/assets/styles/main.scss"],
  plugins: [
    { src: '~/plugins/chat.ts', mode: 'client' } 
  ],
  modules: ["@nuxtjs/i18n", '@pinia/nuxt',],
  
})