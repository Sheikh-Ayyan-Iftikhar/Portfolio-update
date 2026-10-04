import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173, host: true },
  build: {
    target: 'es2020',
    // The `three` chunk is ~240 kB gzip but is split out and dynamically
    // imported by Scene3D, so it never blocks first paint. Raise the warning
    // threshold rather than chase an unavoidable library size.
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Function form is required by rolldown (object form was removed).
        // Order matters: three is checked before react so that
        // "@react-three/*" does not land in the react chunk.
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/[\\/]node_modules[\\/](three|@react-three|three-stdlib|meshline)[\\/]/.test(id)) {
            return 'three';
          }
          if (/[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id)) {
            return 'motion';
          }
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
            return 'react';
          }
        },
      },
    },
  },
});
