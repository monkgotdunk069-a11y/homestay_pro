import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    proxy: {
      // Proxy all /api/* requests to the Express backend during development
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
=======
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
})
