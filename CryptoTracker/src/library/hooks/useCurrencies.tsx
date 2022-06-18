import {useContext, useEffect} from 'react';
import {getCryptocurrencStorage} from '../../store/storege';
import CurrencyContext from '../../store/context/CurrencyContext';

const useCurrencies = () => {
  const {
    currencyState: {cryptocurrencies},
    cryptocurrenciesList,
  } = useContext(CurrencyContext);
  useEffect(() => {
    const get = async () => {
      const result = await getCryptocurrencStorage();
      cryptocurrenciesList(result);
    };
    get();
  }, [cryptocurrencies]);
  return {
    cryptocurrencies,
  };
};

export default useCurrencies;
