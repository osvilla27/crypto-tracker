import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CryptocurrenciesList from '../containers/CryptocurrenciesList';
import AddCryptocurrency from '../containers/AddCryptocurrency';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ListCrypto" component={CryptocurrenciesList} />
    <Stack.Screen name="AddCrypto" component={AddCryptocurrency}/>
  </Stack.Navigator>
);

export default Navigation;