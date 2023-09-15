/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: 'auto',
  trailingComma: 'all',
  bracketSameLine: false,
  arrowParens: 'always',
  plugins: ['prettier-plugin-packagejson'],
};

module.exports = config;
