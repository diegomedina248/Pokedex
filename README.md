<div align="center"> 
  <img src="assets/logo.png">
</div>


## Overview

This is a sample React Native project that uses the latest React features, such as hooks.

<div align="center"> 
  <img src="assets/demo.gif">
</div>

## Prerequisites
- Node > 7 and npm (Recommended: Use [nvm](https://github.com/creationix/nvm))
- Watchman `brew install watchman`
- React Native CLI `npm install -g react-native-cli`
- XCode > 9
- [JDK > 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)

## Installation
  - Clone Project
  - Create an `.env` file using the contents of the `.env.sample`
  - run `npm install`

## Base dependencies
  - [axios](https://github.com/axios/axios) for networking.
  - [PropTypes](https://github.com/facebook/prop-types) to type-check our components exposed properties.
  - [React-Native-Dotenv](https://github.com/zetachang/react-native-dotenv) to manage envionments.
  - [React-Navigation](https://reactnavigation.org/) navigation library.
  - [React-Navigation-Fluid-Transitions](https://github.com/fram-x/FluidTransitions) to add animations to screen transitions.
  - [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
  - [Redux](https://redux.js.org/) for state management.
  - [Redux-Thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
  - [FastImage](https://github.com/DylanVann/react-native-fast-image) for image caching.
  - [React-Native-SVG](https://github.com/react-native-community/react-native-svg) to handle SVG elements.
  - [WikiJS](https://github.com/dijs/wiki) as an interface to MediaWiki APIs.

## Project structure
All application code is located inside `src`:
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder that contains all the components of the application.
    - `common`: Folder to store any common component that you use through the app (such as a generic button, textfields, etc).
    - `navigation`: Folder to store the navigation structure of the app.
    - `MyComponent`: Each component should be stored inside it's own folder, and inside it a file for its code and a separate one for the styles. Then, the `index.js` is only used to export the final component that will be used on the app.
      - `MyComponent.js`
      - `styles.js`
      - `index.js`
  - `controllers`: Folder to store all your network and storage logic (you should have one controller per resource).
  - `helpers`: Folder to store any kind of helper that you have.
  - `hooks`: Folder to store any custom hooks used.
  - `localization`: Store all the static strings used in the application.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `selectors`: Folder to store your selectors for each reducer.

## Styleguide
This app follows [Airbnb's styleguide](https://github.com/airbnb/javascript) with a few exceptions that you can find on the [.eslintrc.json](./.eslintrc.json)
