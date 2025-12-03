// jest.config.js

const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load the
    // next.config.js and .env files in our test environment
    dir: './'
});

// Add any custom config to passed to Jest
/** @type {import('jest').Config } */
const customJestConfig = {
    // Add more setup options to be used before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js],
    // if using Typescript with a baseUrl set to the root directory,
    // then you need the settings below in order for the aliases to
    // work
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest
// can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
