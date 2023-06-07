/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'next',
    'plugin:eslint-comments/recommended',
    'turbo',
    'prettier',
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  overrides: [
    {
      files: '**/*.ts?(x)',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'airbnb-typescript',
        'prettier',
      ],
    },
  ],
};
