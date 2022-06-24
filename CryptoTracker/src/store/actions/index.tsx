import {
  CURRENCIES,
  CurrencyAction,
  FETCH_CURRENCIES,
  IS_VALID,
  SELECT_CURRENCY,
} from '../types';
import {currenciesDB} from '../api/jsonCryptocurrencies';
import {getCryptocurrencStorage} from '../storage';
import {Dispatch} from 'react';
import {Cryptocurrency} from '../../interfaces/cryptocurrency';
import {CurrencyDb} from '../../interfaces/currencyDB';

export const fetchCurrencies =
  () => async (dispatch: Dispatch<CurrencyAction>) => {
    currenciesDB.get<CurrencyDb>('/mktcapfull?limit=25&tsym=USD').then(resp => {
      const response = transformData(resp.data);
      return dispatch({type: FETCH_CURRENCIES, payload: response});
    });
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

const getImageUrl = (url: string) => `https://www.cryptocompare.com${url}`;

const transformData = (currenciesDb: CurrencyDb) => {
  const currencie: Cryptocurrency[] = currenciesDb.Data.map(coin => {
    const currency: Cryptocurrency = {
      id: coin.CoinInfo.Id,
      symbol: coin.CoinInfo.Name,
      name: coin.CoinInfo.FullName,
      price: coin.RAW.USD.PRICE,
      percentage: coin.RAW.USD.CHANGEPCT24HOUR,
      increased: false,
      imageUrl: getImageUrl(coin.CoinInfo.ImageUrl),
    };
    return currency;
  });
  return currencie;
};
