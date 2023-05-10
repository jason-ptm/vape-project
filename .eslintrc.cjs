//eslint-disable-next-line
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        indent: ['error', 2],
        endOfLine: 'auto',
      },
      {
        usePrettierrc: false,
      },
    ],
    'no-unused-vars': ['warn'],
    '@typescript-eslint/indent': ['warn', 2],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
  },
}
