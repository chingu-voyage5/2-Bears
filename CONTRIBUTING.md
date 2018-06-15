# Contributing to this repository

Thank you for your interest in contributing!
For any specific questions or suggestions, feel free to create a new issue with specific details.

## Development environment setup
1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository and [clone your fork](https://help.github.com/articles/cloning-a-repository/) onto your machine.
2. Make sure you have the latests versions of [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.
3. Make sure you have the correct versions of XCode or the Java SDK and Android Studio installed.
4. In the command line terminal, navigate to the root directory of your local clone.
4. Run `npm install` to install all the development dependencies of this project.
5. Run `react-native start` to bundle code 
6. To develop on the frontend only:
  * Run `react-native run-android` to begin developing with a windows computer on an android device simulator.
  * Run `react-native run-ios` to begin developing with a mac computer on an ios device simluator
  * Open browser and enter `http://localhost:8081/debugger-ui/` as the URL.
7. To develop on the server side:
  * Startup local PostgreSQL server in separate terminal by navigating to the directory postgres lives and running `postgres`.
  * Run `npm run start` (doesn't track changes on server) or `npm run serve` (tracks changes both on frontend and backend).
  * Open browser and enter `http://localhost:8000` as the URL.
8. When you are finished with all the changes, save your work, and run `npm start` to see production-ready app at `http://localhost:8000`.
9. Commit and push all files to your forked repository.


## Making a Pull Request
1. When you've finished making your changes, make sure your local clone is up-to-date.
2. Pull (or fetch and merge) down code from the `master` branch of the original repository.
3. Resolve any merge conflicts.
4. Create a pull request from your forked repository into the `development` branch of the original repository.
5. Please follow the [pull request template](https://github.com/chingu-voyage5/2-Bears/blob/master/PULL_REQUEST_TEMPLATE.md) and include specific details about your pull request.
