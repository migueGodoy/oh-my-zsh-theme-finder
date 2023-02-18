module.exports = {
  extends: ['standard', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-tabs': 'off',
    indent: 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'error',
    'eol-last': 'error'
  }
}
