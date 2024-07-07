module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['jsx-a11y', 'import', 'simple-import-sort', 'react'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:react/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'react/jsx-no-duplicate-props': 'error',
		'no-nested-ternary': 'error',
		indent: ['warn', 'tab'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
		'object-curly-spacing': ['warn', 'always'],
		'arrow-parens': ['warn', 'always'],
		'no-unused-vars': 'warn',
		'max-len': [
			'warn',
			{
				code: 140,
				comments: 200,
			},
		],
		'jsx-a11y/alt-text': [
			2,
			{
				elements: ['img', 'object', 'area', 'input[type="image"]'],
				img: ['Image'],
				object: ['Object'],
				area: ['Area'],
				'input[type="image"]': ['InputImage'],
			},
		],
		'jsx-a11y/anchor-is-valid': ['error'],
		'import/no-extraneous-dependencies': ['error'],
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
		'import/first': 'warn',
		'import/newline-after-import': 'warn',
		'import/no-duplicates': 'warn',
	},
};
