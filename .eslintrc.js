// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ['node_modules/', 'dist/', 'pm2/'],
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'space-before-function-paren': 'off',
    'no-use-before-define': 'off',
    'max-len': ['warn', 120],
    'no-useless-rename': ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: ['typeAlias', 'enum'],
        format: ['PascalCase'],
        suffix: ['Type'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
    'jest/no-test-callback': ['off'],
  },
};
