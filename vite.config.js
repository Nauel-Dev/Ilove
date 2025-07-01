 vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ensure this file is treated as an ES module by "type": "module" in package.json
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