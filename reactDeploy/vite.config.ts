import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/testReactDeploy/', // Set the base path to match the GitHub Pages repository name
  build: {
    outDir: 'build', // Set the output directory to 'build'
  },
})