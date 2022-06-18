import {Cryptocurrency, CurrencyState} from '../../interfaces/Cryptocurrency';

type currencyAction =
  | {type: 'cryptocurrenciesList'; payload: Cryptocurrency[]}
  | {type: 'selectCurrency'; payload: Cryptocurrency};

export const currencyReducer = (
  state: CurrencyState,
  action: currencyAction,
): CurrencyState => {
  switch (action.type) {
    case 'cryptocurrenciesList':
      return {...state, cryptocurrencies: action.payload};
    case 'selectCurrency':
      return {...state, cryptocurrency: action.payload};
    default:
      return state;
  }
};
