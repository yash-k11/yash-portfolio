import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '', // This will fix the issue by generating relative paths
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})