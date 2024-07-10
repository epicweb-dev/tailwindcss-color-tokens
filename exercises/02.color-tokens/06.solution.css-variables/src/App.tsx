import { Demo } from './components/Demo'

export default function ColorDesignTokens() {
	return (
		<>
			<Demo />
			<Demo
				style={{ '--color-bg-subtle': '0 0% 19%' } as React.CSSProperties}
			/>
		</>
	)
}
