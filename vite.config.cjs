 vite.config.cjs
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
plugins: [react()],
base: './',            // ensures asset paths are correct
build: {
outDir: 'dist'      // match Vercel’s output directory
},
server: {
open: true          // your existing dev setting
}
});