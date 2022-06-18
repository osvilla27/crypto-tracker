import {useContext, useEffect, useState} from 'react';
import {data} from '../../containers/AddCryptocurrency/data';
import CurrencyContext from '../../store/context/CurrencyContext';

export const useSearchCurrency = ({searchQuery}: {searchQuery: string}) => {
  const [noResult, setNoResult] = useState(true);
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const {setIsValid} = useContext(CurrencyContext);

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

  const dataFilter = data
    .filter(currency => currency.name.includes(searchQuery))
    .slice(0, 3);

  useEffect(() => {
    if (searchQuery.length > 0 && !searchQuery.includes(',')) {
      setShowAutoComplete(true);

      if (searchResults.length !== 0) {
        setNoResult(true);
        setIsValid(false);
      } else {
        setNoResult(false);
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
