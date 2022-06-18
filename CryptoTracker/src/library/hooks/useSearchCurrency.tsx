import {useEffect, useState} from 'react';
import {data} from '../../containers/AddCryptocurrency/data';

export const useSearchCurrency = ({searchQuery}: {searchQuery: string}) => {
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const dataFilter = data
    .filter(currency => currency.name.includes(searchQuery))
    .slice(0, 3);

  useEffect(() => {
    if (searchQuery.length > 0 && !searchQuery.includes(',')) {
      setShowAutoComplete(true);
    } else {
      setShowAutoComplete(false);
    }
  }, [searchQuery]);

  return {
    dataFilter,
    showAutoComplete,
    setShowAutoComplete,
  };
};
