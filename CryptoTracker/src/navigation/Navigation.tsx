import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CryptocurrenciesList from '../containers/CryptocurrenciesList';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListCrypto" component={CryptocurrenciesList}/>
    </Stack.Navigator>
  );
};
export default Navigation;