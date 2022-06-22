export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  price: string;
  percentage: string;
  increased: boolean;
  imageUrl: string;
}

export const cryptocurrencyInitialState: Cryptocurrency = {
  id: '',
  symbol: '',
  name: '',
  price: '',
  percentage: '',
  increased: false,
  imageUrl: '',
};

export interface CurrencyState {
  cryptocurrencies: Cryptocurrency[];
  cryptocurrency: Cryptocurrency;
  isValid: boolean
}

export const currencyInitialState: CurrencyState = {
  cryptocurrencies: [],
  cryptocurrency: cryptocurrencyInitialState,
  isValid: false
};
