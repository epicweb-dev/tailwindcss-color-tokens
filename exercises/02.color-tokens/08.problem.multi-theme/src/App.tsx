import { Demo } from './components/Demo'

export default function ColorDesignTokens() {
	return (
		<>
			<Demo />
			<Demo className="dark" />
			{/*
				🐨 Add a couple of <Demo /> components to test the 
				"citrus" theme in both light and dark modes.
			*/}
		</>
	)
}
