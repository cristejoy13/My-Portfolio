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
        creativeServices: resolve(import.meta.dirname, 'services/creative/index.html'),
        digitalServices: resolve(import.meta.dirname, 'services/digital/index.html'),
        businessServices: resolve(import.meta.dirname, 'services/business/index.html'),
        adminVaEmailManagement: resolve(import.meta.dirname, 'projects/admin-va-email-management/index.html'),
        emailNewsletter: resolve(import.meta.dirname, 'projects/email-newsletter/index.html'),
      },
    },
  },
})
