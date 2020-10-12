module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/e2e/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/test/e2e/jest.setup.ts'],
}
