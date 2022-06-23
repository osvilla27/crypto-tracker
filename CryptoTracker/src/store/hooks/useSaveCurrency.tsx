import { ToastAndroid, Platform, Alert} from 'react-native';
import { useAppDispatch, useAppSelector } from '.';
import { currenciesList, isValid } from '../slices/currency';
import {setCryptocurrencyStorage} from '../storage';

const useSaveCurrency = () => {
  const currencies = useAppSelector(state => state.currency.cryptocurrencies)
  const currency = useAppSelector(state => state.currency.cryptocurrency);
  const dispatch = useAppDispatch()

  const seveCurrency = () => {
    const result = currencies.filter(
        cryptocurrency => cryptocurrency.id === currency.id,
    );

    if (result.length !== 0) {
      notification('The currency is already added')
    } else {
      const result = currencies;
      const resultString = JSON.stringify([...result, currency]);
      setCryptocurrencyStorage(resultString);
      dispatch(currenciesList([...currencies, currency]))
      notification('Saved Cryptocurrency')
      dispatch(isValid(false))
    }
  };

  const removeCurrency = (id: string) => {
    const result = currencies.filter(
      currency => currency.id !== id,
    );
    const currencyList = JSON.stringify(result);
    setCryptocurrencyStorage(currencyList);
  };

  const notification = (message:string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.LONG);
    } else {
      Alert.alert(message);
    }
  }
  return {
    seveCurrency,
    removeCurrency,
  };
};

export default useSaveCurrency;