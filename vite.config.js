import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  resolve: {
    alias: {
      "01-app":"/src/01-app",
      "03-page":"/src/03-page",
      "06-entities":"/src/06-entities",
      "07-shared":"/src/07-shared"
    }
  }
})
