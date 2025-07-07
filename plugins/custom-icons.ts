import { icons } from '~/nuxt-icon-set/svg'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions }) => {
        vuetifyOptions.icons = icons
    })
})
