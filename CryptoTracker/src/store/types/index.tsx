import {Cryptocurrency} from '../../interfaces/Cryptocurrency';

export const CURRENCIES = 'CURRENCIES';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const SELECT_CURRENCY = 'SELECT_CURRENCY';
export const IS_VALID = 'IS_VALID'

interface CurrenciesAction {
  type: typeof CURRENCIES;
  payload: Cryptocurrency[];
}

interface FetchCurrenciesAction {
  type: typeof FETCH_CURRENCIES;
  payload: Cryptocurrency[];
}

interface SelectCurrencyAction {
  type: typeof SELECT_CURRENCY;
  payload: Cryptocurrency;
}

interface IsValidAction {
  type: typeof IS_VALID;
  payload: boolean;
}

export type CurrencyAction =
  | CurrenciesAction
  | FetchCurrenciesAction
  | SelectCurrencyAction
  | IsValidAction;
