import {useEffect, useState} from 'react';
import { useAppDispatch } from '.';
import {data} from '../../api/data';
import { isValid } from '../slices/currency';

export const useSearchCurrency = ({searchQuery}: {searchQuery: string}) => {
  const [noResult, setNoResult] = useState(true);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const dispatch = useAppDispatch()
  const searchResults = data.filter(currency => {
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
      if (searchResults.length !== 0) {
        setNoResult(true);
        dispatch(isValid(false))
      } else {
        setNoResult(false);
        dispatch(isValid(false))
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