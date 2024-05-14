import path from 'path'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
// import { babel } from '@rollup/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    // babel({
    //   extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx']
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
