/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  extends: ['@mahjong/eslint-config/nest'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
