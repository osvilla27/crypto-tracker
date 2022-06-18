import React, {useContext, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {SubTitle} from '../../library/utils/globalStyles';
import {Container, FlatListStyles, MyInput} from './styles';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';
import {useSearchCurrency} from '../../library/hooks/useSearchCurrency';
import CurrencyContext from '../../store/context/CurrencyContext';
import theme from '../../library/utils/theme';

const SearchCurrency = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {searchResults, showAutoComplete, setShowAutoComplete} =
    useSearchCurrency({searchQuery});

  const {selectCurrency, setIsValid} = useContext(CurrencyContext);

  const handleSelect = async ({item}: {item: Cryptocurrency}) => {
    await selectCurrency(item);
    setSearchQuery(item.name);
    setShowAutoComplete(false);
    setIsValid(true)
  };

  const renderItem: ListRenderItem<Cryptocurrency> = ({
    item,
  }: {
    item: Cryptocurrency;
  }) => (
    <Container onPress={() => handleSelect({item})}>
      <SubTitle>
        {item.name} ({item.symbol})
      </SubTitle>
    </Container>
  );

  return (
    <>
      <MyInput
        isActive={searchQuery ? true : false}
        placeholder={'Use a name or ticker symbol...'}
        onChangeText={value => setSearchQuery(value)}
        placeholderTextColor={theme.colors.gray}
        value={searchQuery}
      />
      {showAutoComplete && (
        <FlatListStyles>
          {searchResults.length === 0 ? (
            <SubTitle>No results for "{searchQuery}"</SubTitle>
          ) : (
            <FlatList
              data={searchResults}
              keyExtractor={(item: Cryptocurrency) => item.id}
              renderItem={renderItem}
            />
          )}
        </FlatListStyles>
      )}
    </>
  );
};

export default SearchCurrency;
