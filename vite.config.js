import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        cashbelle: resolve(import.meta.dirname, 'case-studies/cashbelle/index.html'),
        goddessPlan: resolve(import.meta.dirname, 'case-studies/goddess-plan/index.html'),
      },
    },
  },
})
