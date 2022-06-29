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
import {Price, Usd} from '../../interfaces/priceDB';

export const fetchCurrencies =
  () => async (dispatch: Dispatch<CurrencyAction>) => {
    currenciesDB
      .get<CurrencyDb>('/top/mktcapfull?limit=25&tsym=USD')
      .then((resp: any) => {
        const response = transformData(resp.data);
        return dispatch({type: FETCH_CURRENCIES, payload: response});
      })
      .catch(error => {
        if (error.message !== 'Network Error') {
          console.log(error.message);
        }
      });
  };

export const currenciesStorage =
  () => async (dispatch: Dispatch<CurrencyAction>) => {
    const response = await getCryptocurrencStorage();
    const currenciesSymbol = response
      ?.map((coin: Cryptocurrency) => coin.symbol)
      .toString();
    currenciesDB
      .get(`/pricemultifull?fsyms=${currenciesSymbol}&tsyms=USD`)
      .then((resp: any) => {
        const currenciesUpdate = updateData(
          response,
          Object.values(resp.data.RAW),
        );
        return dispatch({type: CURRENCIES, payload: currenciesUpdate});
      })
      .catch((error) => {
        if (error.message !== 'Network Error') {
          console.log(error.message);
        }
        dispatch({type: CURRENCIES, payload: response});
      });
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
  const currencies: Cryptocurrency[] = currenciesDb.Data.map(coin => {
    const currency: Cryptocurrency = {
      id: coin.CoinInfo.Id,
      symbol: coin.CoinInfo.Name,
      name: coin.CoinInfo.FullName,
      price: coin.RAW.USD.PRICE,
      percentage: coin.RAW.USD.CHANGEPCT24HOUR,
      imageUrl: getImageUrl(coin.CoinInfo.ImageUrl),
    };
    return currency;
  });
  return currencies;
};

const updateData = (currencies: Cryptocurrency[], data: Usd[]) => {
  const prices: Price[] = data.map((coin: any) => ({
    symbol: coin.USD.FROMSYMBOL,
    price: coin.USD.PRICE,
    percentage: coin.USD.CHANGEPCT24HOUR,
  }));
  const currenciesUpdate = currencies.map(coin => {
    const price = prices.filter(price => price.symbol === coin.symbol);
    return price.length > 0 ? Object.assign(coin, price[0]) : coin;
  });
  return currenciesUpdate;
};
