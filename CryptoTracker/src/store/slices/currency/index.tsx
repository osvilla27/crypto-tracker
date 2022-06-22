import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cryptocurrency, currencyInitialState} from '../../../interfaces/Cryptocurrency';

const currencySlice = createSlice({
  name: 'currency',
  initialState: currencyInitialState,
  reducers: {
    createCurrency: (state, action: PayloadAction<Cryptocurrency>) => {
      state.cryptocurrency = action.payload
    },
    isValid: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload
    },
    currenciesList: (state, action: PayloadAction<Cryptocurrency[]>) => {
     state.cryptocurrencies = action.payload
    },
  },
});

export const {createCurrency, isValid, currenciesList} = currencySlice.actions
export default currencySlice.reducer;
