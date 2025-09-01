# Next.js Testing Example

## Why?

Testing in software development is crucial. It helps to ensure that the code works as expected and that it doesn't break when changes are made. In this example, we will show you how to test a Next.js application using Jest.

## Steps

1. Install Jest and React testing library.
```sh
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

2. Create a `jest.config.js` file in the root of your project with the following content:
```js

const nextJest = require('next/jest')
 
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
  // ...
    '^@/(.*)$': '<rootDir>/$1',
    }
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
```
Take a look [here](https://nextjs.org/docs/app/building-your-application/testing/jest) for more information on how to set it up.

2. In the `package.json` file, add a script to run Jest:
```json
  {
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"  
  },
```

3. Let's write a test for the `TodoList` component. Create a new file `TodoList.test.js` in the `tests` folder:
```jsx
import {fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList'

test('todo list title renders correctly', ()=> {
  render(<TodoList />)
  const titleElement = screen.getByText("Our Todo List")
  expect(titleElement).toBeInTheDocument()
})
```

4. Run the tests:
```sh
$ npm run test
```
- Take a look at the results
```
$ npm run test

> next-js-14-testing-example-complete@0.1.0 test
> jest

 PASS  tests/TodoList.test.js (10.327 s)
  √ todo list title renders correctly (54 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        15.86 s
Ran all test suites.
```