# Please read before getting started

## Resources:
- Setting up your [iOS](https://www.youtube.com/watch?v=wNINabDpsvQ) or [Android](https://developer.android.com/studio/run/emulator) emulator
- [Configuring your React-Native environment](https://www.youtube.com/watch?v=ql4J6SpLXZA) this tutorial will help you get on the right track. 
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


