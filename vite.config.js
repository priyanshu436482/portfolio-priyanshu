import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel serves from domain root; GitHub Pages needs the repo subpath
  base: process.env.VERCEL ? '/' : '/portfolio-priyanshu/',
})