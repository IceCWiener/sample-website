import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Custom domain (sample-website.regenhardt.dev) serves from root, so base is always '/'
  base: '/',
  plugins: [react()],
  server: {
    host: true,   // listen on 0.0.0.0 so Docker can expose the port
    port: 5173,
    watch: {
      usePolling: true, // required for Docker on Windows (no inotify support)
    },
  },
})
