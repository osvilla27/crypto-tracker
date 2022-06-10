import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/index';
import ListCryptoScreen from '../screens/ListCryptoScreen/index';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListCrypto" component={ListCryptoScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  );
};
export default Navigation;