import {useContext} from 'react';
import {ToastAndroid} from 'react-native';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';
import CurrencyContext from '../../store/context/CurrencyContext';
import {setCryptocurrencyStorage} from '../../store/storege';

const useSaveCurrency = () => {
  const {currencyState} = useContext(CurrencyContext);

  const hanledSeveCurrency = (cryptocurrency: Cryptocurrency) => {
    const result = currencyState.cryptocurrencies.filter(
      currency => currency.id === cryptocurrency.id,
    );

    if (result.length !== 0) {
      ToastAndroid.show('The currency is already added', ToastAndroid.LONG);
    } else {
      const result = currencyState.cryptocurrencies;
      const currencyList = JSON.stringify([...result, cryptocurrency]);
      setCryptocurrencyStorage(currencyList);
      ToastAndroid.show('Saved Cryptocurrency', ToastAndroid.SHORT);
    }
  };

  const hanledRemoveCurrency = (id: string) => {
    const result = currencyState.cryptocurrencies.filter(
      currency => currency.id !== id,
    );
    const currencyList = JSON.stringify(result);
    setCryptocurrencyStorage(currencyList);
  };

  return {hanledSeveCurrency, hanledRemoveCurrency};
};

export default useSaveCurrency;
