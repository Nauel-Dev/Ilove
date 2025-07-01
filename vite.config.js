vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
plugins: [react()],
base: './',            // ensures asset paths are correct
build: {
outDir: 'dist'      // match Vercel’s output directory
},
server: {
open: true          // your existing dev setting
}
});

