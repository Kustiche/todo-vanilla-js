import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier'

export default defineConfig([
	{
		files: ['src/**/*.js'],
		plugins: { js },
		extends: ['js/recommended', 'prettier'],
		languageOptions: { globals: globals.browser },
		rules: {
			'no-console': 'warn',
		},
	},
])
