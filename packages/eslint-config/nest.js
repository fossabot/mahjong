/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
    './libs/variables.js',
    './libs/imports.js',
    './+jest.js',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js'],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowWithDecorator: true,
      },
    ],
  },
  overrides: [
    {
      files: '**/*.ts',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'airbnb-typescript/base',
        './libs/variables.js',
        './libs/imports.js',
        './libs/typescript.js',
        'prettier',
      ],
    },
  ],
};
