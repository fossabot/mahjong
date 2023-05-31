/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config`
  extends: ['@mahjong'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
