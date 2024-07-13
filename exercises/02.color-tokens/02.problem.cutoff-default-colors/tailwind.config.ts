import { type Config } from 'tailwindcss'

export default {
	content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// 🐨 Override the theme colors instead of extending them
			colors: {
				teal: '#00FFE1',
				purple: '#6200FF',
				grey: {
					0: '#FFFFFF',
					5: '#EBEBEB',
					10: '#DADADA',
					20: '#C2C2C2',
					30: '#AAAAAA',
					40: '#919191',
					50: '#797979',
					60: '#616161',
					70: '#494949',
					80: '#313131',
					90: '#181818',
					100: '#000000',
				},
			},
		},
	},
	plugins: [],
} satisfies Config
