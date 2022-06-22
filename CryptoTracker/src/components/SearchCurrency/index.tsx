import React, {useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {SubTitle} from '../../utils/globalStyles';
import {Container, FlatListStyles, MyInput} from './styles';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';
import theme from '../../utils/theme';
import {useSearchCurrency} from '../../store/hooks/useSearchCurrency';
import {useAppDispatch} from '../../store/hooks';
import {createCurrency, isValid} from '../../store/slices/currency';

const SearchCurrency = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {searchResults, showAutoComplete, setShowAutoComplete} =
    useSearchCurrency({searchQuery});
  const dispatch = useAppDispatch();

  const handleSelect = async ({item}: {item: Cryptocurrency}) => {
    await dispatch(createCurrency(item));
    setSearchQuery(item.name);
    setShowAutoComplete(false);
    dispatch(isValid(true));
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
