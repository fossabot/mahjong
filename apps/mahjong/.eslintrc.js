/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  extends: ['@mahjong/eslint-config/nest'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
