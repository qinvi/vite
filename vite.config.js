import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src: resolve('src'),
      assets: resolve('src/assets'),
      api: resolve('src/api'),
      pages: resolve('src/pages'),
      router: resolve('src/router'),
      store: resolve('src/store'),
      components: resolve('src/components'),
      utils: resolve('src/utils')
    }
  }
})

