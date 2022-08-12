/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  worker: {
    plugins: [tsconfigPaths()],
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setUpTest.ts',
  },
});
