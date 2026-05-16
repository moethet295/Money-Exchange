/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),      // ← React plugin က အရင်ဆုံးဖြစ်ရမယ်
    tailwindcss(), // ← ပြီးမှ Tailwind
  ],
  server: {
    proxy: {
      '/api/exchangerate': {
        target: 'https://v6.exchangerate-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/exchangerate/, '')
      }
    }
  }
}) */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Money-Exchange/', // <<--- ဒီနေရာမှာ သင့် repository နာမည် အတိအကျထည့်ပါ
})