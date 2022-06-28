export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  price: number;
  percentage: number;
  imageUrl: string;
}

export const cryptocurrencyInitialState: Cryptocurrency = {
  id: '',
  symbol: '',
  name: '',
  price: 0,
  percentage: 0,
  imageUrl: '',
};

export interface CurrencyState {
  cryptocurrencies: Cryptocurrency[];
  jsonCryptocurrencies: Cryptocurrency[];
  cryptocurrency: Cryptocurrency;
  isValid: boolean;
}

export const currencyInitialState: CurrencyState = {
  cryptocurrencies: [],
  jsonCryptocurrencies: [],
  cryptocurrency: cryptocurrencyInitialState,
  isValid: false,
};
