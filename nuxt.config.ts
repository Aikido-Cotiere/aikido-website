export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@unocss/nuxt',
    'vuetify-nuxt-module',
  ],

  unocss: {
    icons: true
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'unocss-mdi',
      }
    }
  }
})