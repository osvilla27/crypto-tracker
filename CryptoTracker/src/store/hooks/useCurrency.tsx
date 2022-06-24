import {ToastAndroid, Platform, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RootState} from '../';
import {cryptocurrencyInitialState} from '../../interfaces/cryptocurrency';
import actions from '../actions';
import {setCryptocurrencyStorage} from '../storage';

export const useCurrency = () => {
  const currencies = useSelector(
    (state: RootState) => state.currencies?.cryptocurrencies,
  );
  const currency = useSelector(
    (state: RootState) => state.currencies?.cryptocurrency,
  );
  const dispatch = useDispatch();
  const {selectCurrency} = bindActionCreators(actions, dispatch);

  const saveCurrency = () => {
    const result = currencies.filter(
      cryptocurrency => cryptocurrency.id === currency.id,
    );

    if (result.length !== 0) {
      notification('The currency is already added');
    } else {
      const result = currencies;
      const resultString = JSON.stringify([...result, currency]);
      setCryptocurrencyStorage(resultString);
      notification('Saved Cryptocurrency');
      selectCurrency(cryptocurrencyInitialState);
    }
  };

  const removeCurrency = (id: string) => {
    const result = currencies.filter(currency => currency.id !== id);
    const currencyList = JSON.stringify(result);
    setCryptocurrencyStorage(currencyList);
  };

  const notification = (message: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.LONG);
    } else {
      Alert.alert(message);
    }
  };
  return {
    saveCurrency,
    removeCurrency,
  };
};
