import { type Config } from 'tailwindcss'

export default {
	content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// 🐨 Add the custom colors here
		},
	},
	plugins: [],
} satisfies Config
