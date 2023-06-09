/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'next',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/csf-strict',
    'plugin:storybook/addon-interactions',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
    'turbo',
    './libs/variables.js',
    './libs/imports.js',
    './libs/react.js',
    './+jest.js',
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
        './libs/variables.js',
        './libs/imports.js',
        './libs/typescript.js',
        './libs/react.js',
        'prettier',
      ],
      rules: {
        // Use TypeScript instead of prop types.
        'react/prop-types': 'off',

        // Use default value with destructuring assignment instead of
        // `defaultProps`.
        'react/require-default-props': 'off',
      },
    },
    {
      files: [
        'src/app/**/@(page|layout|template|loading|error|global-error|no-found).tsx',
        'app/**/@(page|layout|template|loading|error|global-error|no-found).tsx',
        'src/pages/**/*.tsx',
        'pages/**/*.tsx',
      ],
      rules: {
        'import/prefer-default-export': 'error',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'import/prefer-default-export': 'error',
        'import/no-default-export': 'off',

        'react/jsx-props-no-spreading': 'off',

        'storybook/no-title-property-in-meta': 'off',
      },
    },
  ],
};
