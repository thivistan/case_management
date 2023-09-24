# Please read before getting started

## Resources:
- Setting up your [iOS](https://www.youtube.com/watch?v=wNINabDpsvQ) or [Android](https://developer.android.com/studio/run/emulator) emulator
- [Configuring your React-Native environment](https://www.youtube.com/watch?v=ASMXviUtxrc) this tutorial will help you get on the right track. 
- This is a great set of real-world examples of react-native apps https://youtu.be/AkEnidfZnCU. You aren't expected to watch the whole thing, it's just great to skim through the video and see how react native code is written!
- [Writing good commit messages](Resources/CommitMessages.md)
- [Writing good branch names](Resources/BranchNames.md)

## Guidelines
### Before working on the application, please follow these steps below:
#### 1. When working on the project, clone the GitHub repository in your favorite IDE or Text Editor by using this command in the terminal: <br />
```
git clone <url>
``` 
#### 2. In your teminal, create a new branch with this command. The command simultaneously creates and checks out ＜new-branch＞. 
The -b option is a convenience flag that tells Git to run git branch before running git checkout ＜new-branch＞.
```
git checkout -b <new-branch> 
``` 
#### 3. Once you have changed or added a new feature you can use this command to capture a snapshot of the project's currently staged changes:
```
git add <file-name>
git commit -m "Commit Message"
```
#### 4. Lastly, to push all of your commits to the GitHub repository, you can use this command:
```
git push
```

## Common issues:
When origianlly cloning the repository on your computer, you might encounter this error below when runnning "expo start" for the first time:
```
Unable to find expo in this project - have you run yarn / npm install yet?
```
To fix this solution, run these two commands asynchronously:
```
npm install -g yarn
yarn add expo
```

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

For more information, please read the documentation below:
[Expo doc on unit tests](https://docs.expo.dev/develop/unit-testing/?redirected#unit-test)