import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['../jest.setup.ts'],
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../../../coverage/apps/mahjong',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  reporters: process.env.CI
    ? [
        'default',
        [
          'jest-junit',
          {
            suiteName: 'mahjong app unit tests',
            outputDirectory: '../../reports/apps/mahjong',
            outputName: 'unit-test-results.xml',
          },
        ],
      ]
    : undefined,
};

export default config;
