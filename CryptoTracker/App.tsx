import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {CurrencyProvider} from './src/store/context/CurrencyContext';

const App = () => (
  <NavigationContainer>
    <CurrencyProvider>
      <Navigation />
    </CurrencyProvider>
  </NavigationContainer>
);

export default App;
