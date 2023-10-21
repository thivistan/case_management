# Tests

The `tests` directory contains the test files for the app.

## Running Tests

You can create and run tests for the app using Jest. Follow these steps to create new test files and run tests:

### Creating Test Files

1. Create a new test file for a component or module by following the naming convention `ComponentName.test.js` or `ModuleName.test.js`. For example, to create a test file for the `HealthServicesScreen` component, name it `HealthServicesScreen.test.js`.

2. Place your test file in the appropriate directory within your project's source code, typically in the same directory as the component or module you are testing.

3. Write your test cases using Jest's testing functions and assertions. Here's an example of a simple test case:

```javascript
// HealthServicesScreen.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import HealthServicesScreen from './HealthServicesScreen';

describe('HealthServicesScreen', () => {
    it('renders correctly', () => {
    const component = renderer.create(<HealthServicesScreen />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
});
```

4. You can run your tests using the following npm scripts:

To run tests once and see the results:
```
npm run test
```
To run tests in watch mode (tests automatically rerun when files change):
```
npm run testWatch
```
Jest will execute your test suite(s) and display the results in the terminal. Make sure to keep your tests up to date as the app evolves to ensure code quality and reliability.

For more information, please read the [documentation](https://docs.expo.dev/develop/unit-testing/?redirected#unit-test) on unit tests by Expo.
