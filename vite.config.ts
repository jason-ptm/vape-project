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
        find: 'assests',
        replacement: resolve(__dirname, 'src/assests'),
      },
      {
        find: 'models',
        replacement: resolve(__dirname, 'src/models'),
      },
      {
        find: 'guards',
        replacement: resolve(__dirname, 'src/guards'),
      },
    ],
  },
})
