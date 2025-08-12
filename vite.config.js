import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx', // Your main entry file
        // Add other entry points if needed
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Customize asset naming
      },
    },
  },
})
