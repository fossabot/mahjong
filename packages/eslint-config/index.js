/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  extends: ['eslint:recommended', 'next', 'turbo', 'prettier'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
