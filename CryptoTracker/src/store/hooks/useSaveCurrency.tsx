import {ToastAndroid} from 'react-native';
import { useAppDispatch, useAppSelector } from '.';
import { currenciesList } from '../slices/currency';
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
      ToastAndroid.show('The currency is already added', ToastAndroid.LONG);
    } else {
      const result = currencies;
      const resultString = JSON.stringify([...result, currency]);
      setCryptocurrencyStorage(resultString);
      dispatch(currenciesList([...currencies, currency]))
      ToastAndroid.show('Saved Cryptocurrency', ToastAndroid.SHORT);
    }
  };

  const removeCurrency = (id: string) => {
    const result = currencies.filter(
      currency => currency.id !== id,
    );
    const currencyList = JSON.stringify(result);
    setCryptocurrencyStorage(currencyList);
  };

  return {
    seveCurrency,
    removeCurrency,
  };
};

export default useSaveCurrency;