import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://apotomelabs.com',
      dynamicRoutes: [
        '/',
        '/projects',
        '/about',
        '/contact',
        '/pricing'
      ],
      changefreq: 'weekly',
      priority: 0.8,
      outDir: 'dist'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
