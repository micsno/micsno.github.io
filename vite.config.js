import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/micsno.github.io/', // Tämä on GitHub Pages -sivustosi alihakemisto
  plugins: [react()],
  build: {
    sourcemap: true
  }
});
