const { defineConfig } = require('vite');
const path = require('path');

// Vite config for static site with SCSS and vendor libs
module.exports = defineConfig({
  server: { host: '127.0.0.1' /*true*/, port: 5173, strictPort: true },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: ''
  },
  css: {
    devSourcemap: false, // Disable sourcemaps completely
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Reduce SCSS deprecation warnings
        logger: {
          warn: () => {} // Silence SCSS warnings
        }
      }
    }
  }
});
