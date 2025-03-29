import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true, // Allows external devices to access
    port: 5173, // You can change this port if needed
    strictPort: true, // Ensures the server fails if the port is already in use
  }
})
