import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'modules',
        replacement: resolve(__dirname, 'src/modules'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: 'models',
        replacement: resolve(__dirname, 'src/models'),
      },
      {
        find: 'guards',
        replacement: resolve(__dirname, 'src/guards'),
      },
      {
        find: 'context',
        replacement: resolve(__dirname, 'src/context'),
      },

      {
        find: 'components',
        replacement: resolve(__dirname, 'src/components'),
      },
    ],
  },
})
