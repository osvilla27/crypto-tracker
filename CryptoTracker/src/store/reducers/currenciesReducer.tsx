import {currencyInitialState} from '../../interfaces/Cryptocurrency';
import {
  CURRENCIES,
  CurrencyAction,
  FETCH_CURRENCIES,
  SELECT_CURRENCY,
  IS_VALID,
} from '../types';

export default (state = currencyInitialState, action: CurrencyAction) => {
  switch (action.type) {
    case CURRENCIES:
      return {...state, cryptocurrencies: action.payload};
    case FETCH_CURRENCIES:
      return {...state, jsonCryptocurrencies: action.payload};
    case SELECT_CURRENCY:
      return {...state, cryptocurrency: action.payload};
    case IS_VALID:
      return {...state, isValid: action.payload};
    default:
      return state;
  }
};
