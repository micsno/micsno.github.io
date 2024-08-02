import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/micsno.github.io/', // Aseta tämä polku perus-URL:iksi
  plugins: [react()],
  build: {
    sourcemap: true
  }
});
