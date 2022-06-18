import {createContext, useReducer, useState} from 'react';
import React from 'react';
import {
  Cryptocurrency,
  currencyInitialState,
  CurrencyState,
} from '../../interfaces/Cryptocurrency';
import {currencyReducer} from '../reducers/currencyReducer';

export interface CurrencyContextProps {
  isValid: boolean;
  currencyState: CurrencyState;

  cryptocurrenciesList: (cryptocurrencies: Cryptocurrency[]) => void;
  selectCurrency: (cryptocurrency: Cryptocurrency) => void;
  setIsValid: React.Dispatch<boolean>;
}

export const CurrencyContext = createContext({} as CurrencyContextProps);

export const CurrencyProvider = ({children}: any) => {
  const [isValid, setIsValid] = useState(false);
  const [currencyState, dispatch] = useReducer(
    currencyReducer,
    currencyInitialState,
  );

  const cryptocurrenciesList = async (cryptocurrencies: Cryptocurrency[]) => {
    dispatch({type: 'cryptocurrenciesList', payload: cryptocurrencies});
  };

  const selectCurrency = (cryptocurrency: Cryptocurrency) => {
    dispatch({type: 'selectCurrency', payload: cryptocurrency});
    return true;
  };

  return (
    <CurrencyContext.Provider
      value={{
        isValid,
        currencyState,
        selectCurrency,
        cryptocurrenciesList,
        setIsValid,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
