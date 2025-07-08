import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
    content: {
        filesystem: [
            "content/**/*.md",
            "components/**/*.{vue,js,ts}",
            "layouts/**/*.vue",
            "pages/**/*.vue",
            "plugins/**/*.{js,ts}",
        ]
    },
    // ...UnoCSS options
    presets: [
        // Add any presets you need, e.g., presetUno(), presetAttributify(), etc.
        presetIcons({
        })
    ],
})
