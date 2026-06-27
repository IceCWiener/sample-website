import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deployed to GitLab Pages the app lives at /<project-name>/
// CI_PROJECT_NAME is set automatically by GitLab CI.
const base = process.env.CI_PROJECT_NAME ? `/${process.env.CI_PROJECT_NAME}/` : '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: true,   // listen on 0.0.0.0 so Docker can expose the port
    port: 5173,
    watch: {
      usePolling: true, // required for Docker on Windows (no inotify support)
    },
  },
})
