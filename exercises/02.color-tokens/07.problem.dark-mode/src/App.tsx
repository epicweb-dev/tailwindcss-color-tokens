import { Demo } from './components/Demo'

export default function ColorDesignTokens() {
	return (
		<>
			<Demo />
			<Demo
				/*
					🐨 Remove the `style` attribute. Replace it with a "dark" className.
				*/
				style={{ '--color-bg-subtle': '0 0% 19%' } as React.CSSProperties}
			/>
		</>
	)
}
