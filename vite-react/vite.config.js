import { defineConfig } from 'vite'

export default defineConfig({
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
