module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-prefer-arrow', '@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': 0,
    'no-duplicate-imports': 'off',
    'prettier/prettier': 0,
    camelcase: 0,
    'max-len': [
      1,
      {
        code: 120,
      },
    ],
    'no-use-before-define': 0,
    'default-param-last': 0,
    'multiline-ternary': 0,
    'key-spacing': ['error'],
    'object-curly-spacing': ['error', 'always'],
    curly: 'error',
    semi: ['error', 'never'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-interface': 1, // Should be fixed
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-floating-promises': 1, // Should be fixed
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-misused-promises': 1, // Should be fixed
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/prefer-regexp-exec': 1, // Should be fixed
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/unbound-method': 1, // Should be fixed
    '@typescript-eslint/require-await': 1, // Should be fixed
    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@next/next/no-img-element': 0,
    '@next/next/no-html-link-for-pages': 0,
    'import/newline-after-import': 0,
  },
}
