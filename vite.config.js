import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Moodtrackr425',
        short_name: 'Moodtrackr425',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4A90E2',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
