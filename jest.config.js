// jest.config.js
const nextJest = require('next/jest')

const esmPackages = [
  'uuid',
  'unicode-emoji',
  'string-strip-html',
  'ranges-apply',
  'ranges-merge',
  'ranges-sort',
  'ranges-push',
  'string-collapse-leading-whitespace',
  'string-left-right',
  'firebase',
  '@firebase',
]

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/**/*', '!src/theme.ts', '!src/lib/**/*'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
}

async function jestConfig() {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  nextJestConfig.transformIgnorePatterns[0] = `/node_modules/(?!(${esmPackages.join(
    '|'
  )})/)`
  return nextJestConfig
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = jestConfig
