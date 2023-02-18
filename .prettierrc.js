module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: true,
  overrides: [
    {
      files: ['*.json', '*.md', '*.toml', '*.yml', '*.js', '*.ts'],
      options: {
        useTabs: false
      }
    }
  ],
  endOfLine: 'lf'
}
