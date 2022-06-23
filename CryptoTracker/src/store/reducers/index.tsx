import {combineReducers} from 'redux';
import currenciesReducer from './currenciesReducer';

const reducers = combineReducers({
  currencies: currenciesReducer,
});
export default reducers;

export type State = ReturnType<typeof reducers>;
