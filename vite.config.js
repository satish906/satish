
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Ensuring the dev server runs smoothly in various environments
    host: true,
    port: 3000,
  },
  define: {
    // This allows the application to access process.env.API_KEY 
    // as required by the @google/genai SDK instructions.
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Ensure the output is clean and optimized
    minify: 'terser',
  },
});
