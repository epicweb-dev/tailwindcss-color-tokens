const backgroundColors = {
	highlight: 'hsl(var(--color-bg-highlight) / <alpha-value>)',
	accent: 'hsl(var(--color-bg-accent) / <alpha-value>)',
	neutral: {
		DEFAULT: 'hsl(var(--color-bg-neutral) / <alpha-value>)',
		inverted: 'hsl(var(--color-bg-neutral-inverted) / <alpha-value>)',
	},
	subtle: 'hsl(var(--color-bg-subtle) / <alpha-value>)',
	bold: 'hsl(var(--color-bg-bold) / <alpha-value>)',
}

const borderColors = {
	bold: 'hsl(var(--color-border-bold) / <alpha-value>)',
	subtle: 'hsl(var(--color-border-subtle) / <alpha-value>)',
	muted: 'hsl(var(--color-border-muted) / <alpha-value>)',
}

const textColors = {
	copy: 'hsl(var(--color-text-copy) / <alpha-value>)',
	subtle: 'hsl(var(--color-text-subtle) / <alpha-value>)',
	muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
	inverted: 'hsl(var(--color-text-inverted) / <alpha-value>)',
}

export default {
	content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
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
}
