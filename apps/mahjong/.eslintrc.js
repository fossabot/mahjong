/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  extends: ['@mahjong/eslint-config/nest'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: 'test/**/*.ts',
      rules: {
        'import/no-extraneous-dependencies': 'off',

        'jest/expect-expect': [
          'error',
          { assertFunctionNames: ['expect', 'request.**.expect'] },
        ],
      },
    },
  ],
};
