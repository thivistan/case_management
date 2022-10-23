# Please read before getting started

### Resources:
- [Writing good commit messages](https://github.com/opthaddeus/case_management/blob/3663d2b9f1ee93b1be6eb0872d0f399458b20869/Resources/CommitMessages.md)
- [Writing good branch names]()
- [Setting up your emulator iOS/Adnroid]()
- [Configuring your React-Native environment]()

### Guidelines
#### Before working on the application, please follow these steps below:
1 - When working on the project, clone the GitHub repository in your favorite IDE or Text Editor by using this command in the terminal: <br />
```
git clone <url>
``` 
2 - In your teminal, create a new branch with this command. The command simultaneously creates and checks out ＜new-branch＞. 
The -b option is a convenience flag that tells Git to run git branch before running git checkout ＜new-branch＞.
```
git checkout -b <new-branch> 
``` 
3 - Once you have changed or added a new feature you can use this command to capture a snapshot of the project's currently staged changes:
```
git add <file-name>
git commit -m "Commit Message"
```
4 - Lastly, to push all of your commits to the GitHub repository, you can use this command:
```
git push
```

Once you are sure that everything is working, you can open a [merge request]() to have your changes approved before they are pushed to main repository.
Having your code reviewed by a peer will help you learn the code base, as well as help you learn new technologies and techniques that will grow your skillset.
If you're changes are approved, they will be merged with the main branch.
