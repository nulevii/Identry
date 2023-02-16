module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'xo', 'plugin:storybook/recommended'],
	overrides: [{
		extends: ['xo-typescript'],
		files: ['*.ts', '*.tsx'],
		rules: {
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/consistent-type-assertions': 'off',
			'@typescript-eslint/consistent-type-definitions': 'off',
		},
	}],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
	},
};
