import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListCryptoScreen from '../screens/ListCryptoScreen/index';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListCrypto" component={ListCryptoScreen}/>
    </Stack.Navigator>
  );
};
export default Navigation;