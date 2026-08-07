import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-config-prettier'

export default defineConfig([
	js.configs.recommended,
	prettier,
	{
		files: ['src/**/*.js'],
		languageOptions: { globals: globals.browser },
		rules: {
			'no-console': 'warn',
		},
	},
])
