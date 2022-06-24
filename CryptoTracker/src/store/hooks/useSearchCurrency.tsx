import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RootState} from '..';
import actions from '../actions';

export const useSearchCurrency = ({searchQuery}: {searchQuery: string}) => {
  const [noResult, setNoResult] = useState(true);
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const dispatch = useDispatch();
  const {fetchCurrencies, isValid} = bindActionCreators(actions, dispatch);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const currencis = useSelector(
    (state: RootState) => state.currencies?.jsonCryptocurrencies,
  );

  const searchResults = currencis?.filter(currency => {
    if (
      currency.name
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      currency.symbol
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ) {
      return currency;
    }
  });

  useEffect(() => {
    if (searchQuery.length > 0 && !searchQuery.includes(',')) {
      setShowAutoComplete(true);
      if (searchResults?.length !== 0) {
        setNoResult(true);
        isValid(false);
      } else {
        setNoResult(false);
        isValid(false);
      }
    } else {
      setShowAutoComplete(false);
    }
  }, [searchQuery]);

  return {
    noResult,
    searchResults,
    showAutoComplete,
    setShowAutoComplete,
  };
};
