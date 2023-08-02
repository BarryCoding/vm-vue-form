import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [vue(), Components({ dts: 'src/types/components.d.ts' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
