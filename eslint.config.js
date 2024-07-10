import defaultConfig from '@epic-web/config/eslint'

/** @type {import("eslint").Linter.Config} */
export default [
	...defaultConfig,
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 1000,
				},
			},
		},
		rules: {
			// we leave unused vars around for the exercises
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
]
