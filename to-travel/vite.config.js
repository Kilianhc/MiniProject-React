import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/MiniProject-React/to-travel/',
  plugins: [react()],
})
