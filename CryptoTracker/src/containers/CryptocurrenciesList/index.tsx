import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {FlatListStyles, AddCrypto} from './styles';
import Currency from '../../components/Currency';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SubTitle} from '../../library/utils/globalStyles';
import useCurrencies from '../../library/hooks/useCurrencies';

interface Props extends NativeStackScreenProps<any, any> {}

const CryptocurrenciesList = ({navigation}: Props) => {
  const {cryptocurrencies} = useCurrencies();

  const renderItem: ListRenderItem<Cryptocurrency> = ({
    item,
  }: {
    item: Cryptocurrency;
  }) => <Currency item={item} />;

  return (
    <View>
      <Header />
      <FlatListStyles>
        {cryptocurrencies?.length === 0 ? (
          <SubTitle>The wishlist is empty!</SubTitle>
        ) : (
          <FlatList
            data={cryptocurrencies}
            keyExtractor={(item: Cryptocurrency) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        )}
      </FlatListStyles>
      <AddCrypto onPress={() => navigation.navigate('AddCrypto')}>
        <SubTitle>+ Add a Cryptocurrency</SubTitle>
      </AddCrypto>
    </View>
  );
};

export default CryptocurrenciesList;
