import {createContext, useReducer} from 'react';
import React from 'react';
import {
  Cryptocurrency,
  currencyInitialState,
  CurrencyState,
} from '../../interfaces/Cryptocurrency';
import {currencyReducer} from '../reducers/currencyReducer';

export interface CurrencyContextProps {
  currencyState: CurrencyState;
  cryptocurrenciesList: (cryptocurrencies: Cryptocurrency[]) => void;
  selectCurrency: (cryptocurrency: Cryptocurrency) => void;
}

export const CurrencyContext = createContext({} as CurrencyContextProps);

export const CurrencyProvider = ({children}: any) => {
  const [currencyState, dispatch] = useReducer(
    currencyReducer,
    currencyInitialState,
  );

  const cryptocurrenciesList = async (cryptocurrencies: Cryptocurrency[]) => {
    dispatch({type: 'cryptocurrenciesList', payload: cryptocurrencies});
  };

  const selectCurrency = (cryptocurrency: Cryptocurrency) => {
    dispatch({type: 'selectCurrency', payload: cryptocurrency});
  };
  return (
    <CurrencyContext.Provider
      value={{
        currencyState,
        selectCurrency,
        cryptocurrenciesList,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
