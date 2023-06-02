import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
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
