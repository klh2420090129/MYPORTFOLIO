import { defineConfig } from 'vite'

export default defineConfig({
  base: '/MYPORTFOLIO/',
  server: {
    port: 5180,
    open: true,
    host: true
  },
  preview: {
    port: 4180,
    open: true,
    host: true
  }
})
