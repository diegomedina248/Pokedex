// Awaiting response: https://github.com/wix/react-native-navigation/issues/4558
/* eslint-disable-next-line */
console.disableYellowBox = true;

import React from 'react';

import { Provider } from 'react-redux';
import Navigation from './components/navigation';
import store from './reducers';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
