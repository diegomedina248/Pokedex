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
