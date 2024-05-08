import path from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ['src'] })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'neumify',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react']
    }
  }
})
