import { type Config } from 'tailwindcss'

/* 
	🐨 1. Convert the HEX colors below to `H` `S` `L` strings

	(steps 2 and 3 happen in the `src/index.css` file)
*/
const colors = {
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
}

/* 
	🐨 4. Update the objects below to consume the new CSS variables.
	Make sure you compose them with Tailwind's <alpha-value>.

	Example: `highlight: 'hsl(var(--color-bg-highlight) / <alpha-value>)'`
*/
const backgroundColors = {
	highlight: colors.teal,
	accent: colors.purple,
	neutral: {
		DEFAULT: colors.grey['0'],
		inverted: colors.grey['100'],
	},
	subtle: colors.grey['5'],
	bold: colors.grey['80'],
}

const borderColors = {
	bold: colors.grey['60'],
	subtle: colors.grey['40'],
	muted: colors.grey['20'],
}

const textColors = {
	copy: colors.grey['100'],
	subtle: colors.grey['60'],
	muted: colors.grey['40'],
	inverted: colors.grey['5'],
}

export default {
	content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			inherit: 'inherit',
			transparent: 'transparent',
			current: 'currentColor',
		},
		extend: {
			// Background concerns
			backgroundColor: backgroundColors,
			gradientColorStops: backgroundColors,
			// ...

			// Border concerns
			borderColor: borderColors,
			stroke: borderColors,
			outlineColor: borderColors,
			ringColor: borderColors,
			// ...

			textColor: textColors,
			fill: textColors,
			// ...
		},
	},
	plugins: [],
} satisfies Config
