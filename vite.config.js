import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is '/' because this deploys to ardoardo02.github.io (user site, root URL)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
