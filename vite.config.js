// vite.config.js
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'goodtill',
      fileName: (format) => {
        if (format === 'es') return `goodtill.mjs`
        return `goodtill.cjs`
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['axios'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          axios: 'axios',
        },
      },
    },
  },
})
