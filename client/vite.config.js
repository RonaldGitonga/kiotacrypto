import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      web3: 'web3/dist/web3.min.js',
    },

    // or
    alias: [
      {
        find: 'web3',
        replacement: 'web3/dist/web3.min.js',
      },
    ],
  },
})


