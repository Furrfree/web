import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/furrfree-web/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        groups: path.resolve(__dirname, 'groups/index.html'),
        meetings: path.resolve(__dirname, 'meetings/index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
      }
    },
  },
})
