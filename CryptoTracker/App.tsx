import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {store} from './src/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </Provider>
);

export default App;
