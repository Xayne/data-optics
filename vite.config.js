export default {
  root: './iframe-app/',
  build: {
    outDir: '../dist/iframe-app',
    emptyOutDir: true, // also necessary <:: https://stackoverflow.com/questions/66863200/changing-the-input-and-output-directory-in-vite
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
}
