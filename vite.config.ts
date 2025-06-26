import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["a219-2403-6200-88a2-249-6cdd-499b-1834-8cd6.ngrok-free.app"],
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      clientPort: 5173, 
  },

  }
  
})
