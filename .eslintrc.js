module.exports = {
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-tabs': 'off',
    indent: 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'error',
    'eol-last': 'error'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'astro/no-set-html-directive': 'error'
      }
    }
  ]
}
