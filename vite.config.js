import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/micsno.github.io/',
  plugins: [react()],
  build: {
    sourcemap: true
  }
});
