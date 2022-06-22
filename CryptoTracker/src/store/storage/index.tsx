import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cryptocurrency } from '../../interfaces/cryptocurrency';

export const getCryptocurrencStorage = async () => {
  try {
    const result = await AsyncStorage.getItem('cryptocurrencies');
    return JSON.parse(result || '[]') as Cryptocurrency;
  } catch (error) {
    console.log(error);
  }
};

export const setCryptocurrencyStorage = async (cryptocurrency: string) => {
  try {
    await AsyncStorage.setItem('cryptocurrencies', cryptocurrency);
  } catch (error) {
    console.log(error);
  }
};