import {
  CURRENCIES,
  CurrencyAction,
  FETCH_CURRENCIES,
  IS_VALID,
  SELECT_CURRENCY,
} from '../types';
import jsonCryptocurrencies from '../api/jsonCryptocurrencies';
import {getCryptocurrencStorage} from '../storage';
import {Dispatch} from 'react';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';

export const fetchCurrencies =
  () => async (dispatch: Dispatch<CurrencyAction>) => {
    const response = jsonCryptocurrencies;
    dispatch({type: FETCH_CURRENCIES, payload: response});
  };

export const currenciesStorage =
  () => async (dispatch: Dispatch<CurrencyAction>) => {
    const response = await getCryptocurrencStorage();
    dispatch({type: CURRENCIES, payload: response});
  };

export const selectCurrency = (currency: Cryptocurrency) => ({
  type: SELECT_CURRENCY,
  payload: currency,
});

export const isValid = (isValid: boolean) => ({
  type: IS_VALID,
  payload: isValid,
});

export default {currenciesStorage, fetchCurrencies, selectCurrency, isValid};
