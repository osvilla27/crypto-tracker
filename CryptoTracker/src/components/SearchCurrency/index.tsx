import React, {useContext, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {SubTitle} from '../../library/utils/globalStyles';
import {Container, FlatListStyles, MyInput} from './styles';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';
import {useSearchCurrency} from '../../library/hooks/useSearchCurrency';
import CurrencyContext from '../../store/context/CurrencyContext';

const SearchCurrency = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {dataFilter, showAutoComplete} = useSearchCurrency({searchQuery});

  const {selectCurrency} = useContext(CurrencyContext);

  const handleSelect = ({item}: {item: Cryptocurrency}) => {
    selectCurrency(item);
    setSearchQuery(item.name);
  };

  const renderItem: ListRenderItem<Cryptocurrency> = ({
    item,
  }: {
    item: Cryptocurrency;
  }) => (
    <Container onPress={() => handleSelect({item})}>
      {dataFilter.length === 0 ? (
        <SubTitle>No results for "{searchQuery}"</SubTitle>
      ) : (
        <SubTitle>
          {item.name} ({item.symbol})
        </SubTitle>
      )}
    </Container>
  );

  return (
    <>
      <MyInput
        isActive={searchQuery ? true : false}
        placeholder={'Use a name or ticker symbol...'}
        onChangeText={value => setSearchQuery(value)}
        value={searchQuery}
      />
      {showAutoComplete && (
        <FlatListStyles>
          <FlatList
            data={dataFilter}
            keyExtractor={(item: Cryptocurrency) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        </FlatListStyles>
      )}
    </>
  );
};

export default SearchCurrency;
