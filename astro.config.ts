import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'bun'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
  devToolbar: {
    enabled: false,
  },

  integrations: [react()],
})
