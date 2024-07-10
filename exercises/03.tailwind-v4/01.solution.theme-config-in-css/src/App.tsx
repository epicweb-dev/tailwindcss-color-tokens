import { Demo } from './components/Demo'

export default function ColorDesignTokens() {
	return (
		<>
			<Demo />
			<Demo className="dark" />
			<Demo data-theme="citrus" />
			<Demo data-theme="citrus" className="dark" />
		</>
	)
}
