import { nuxtIcon } from './common'

const defaultSet = 'svgNuxtIcon'
const svgNuxtIcon = nuxtIcon()

const icons = {
    defaultSet,
    sets: { svgNuxtIcon },
} satisfies import('vuetify').IconOptions

export { icons }