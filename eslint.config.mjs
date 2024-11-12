import globals from 'globals'
import pluginJs from '@eslint/js'
import stylisticJsPlugin from '@stylistic/eslint-plugin-js'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser,
    },
    plugins: {
      '@stylistic/js': stylisticJsPlugin,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 0,
    },
    ignores: ['node_modules/', 'dist/', 'frontend/'],
  },
  pluginJs.configs.recommended,
]
