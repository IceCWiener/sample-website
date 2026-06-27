import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deployed to GitHub Pages the app lives at /<repo-name>/
// GITHUB_REPOSITORY is set automatically by GitHub Actions (format: "owner/repo").
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repoName ? `/${repoName}/` : '/'

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
