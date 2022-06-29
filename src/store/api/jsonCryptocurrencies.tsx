import axios from 'axios';

export const currenciesDB = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
});
