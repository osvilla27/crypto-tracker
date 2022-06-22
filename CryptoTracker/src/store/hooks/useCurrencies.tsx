import {useEffect} from 'react';
import {getCryptocurrencStorage} from '../storage';
import {useAppDispatch, useAppSelector} from '.';
import {currenciesList} from '../slices/currency';

export const useCurrencies = () => {
  const currencies = useAppSelector(state => state.currency.cryptocurrencies);
  const dispatch = useAppDispatch();

  const getCryptocurrencies = async () => {
    const result = await getCryptocurrencStorage();
    dispatch(currenciesList(result));
  };

  useEffect(() => {
    getCryptocurrencies();
  }, [currencies]);
  
  return {
    currencies,
  };
};
