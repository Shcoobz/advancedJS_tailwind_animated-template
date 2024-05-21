import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/advancedJS_tailwind_animated-template/',
  build: {
    outDir: 'build',
  },
});
