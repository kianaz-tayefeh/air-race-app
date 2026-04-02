module.exports = {
  trailingComma: 'all',
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  endOfLine: 'lf',
  arrowParens: 'avoid',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^react$', '<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '^[./]', '.scss$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
