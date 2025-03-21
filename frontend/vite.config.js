import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true, // Allows external access via IP
    port: 5173, // Change the port if needed
  },
})