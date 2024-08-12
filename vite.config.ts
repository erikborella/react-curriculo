import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './build',
    emptyOutDir: true,
  },
  base: '/react-curriculo/',
  plugins: [react()],
})
