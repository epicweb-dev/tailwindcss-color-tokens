import tailwindVite from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindVite()],
	server: {
		port: Number(process.env.PORT) || 3000,
	},
})
