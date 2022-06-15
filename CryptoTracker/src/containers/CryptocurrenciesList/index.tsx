import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {FlatListStyles, AddCrypto} from './styles';
import {SubTitle} from '../../components/Currency/styles';
import Currency from '../../components/Currency';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';

const data: Cryptocurrency[] = [
  {
    id: 'BCT',
    name: 'Bitcoin',
    price: '1,224.3',
    percentage: '1,45',
    increased: false,
    imageUrl: require('../../assets/Bitcoin.png'),
  },
  {
    id: 'ETH',
    name: 'Ethereum',
    price: '123,224.3',
    percentage: '1,45',
    increased: true,
    imageUrl: require('../../assets/Ethereum.png'),
  },
  {
    id: 'XRP',
    name: 'XRP',
    price: '1,224.3',
    percentage: '1,45',
    increased: false,
    imageUrl: require('../../assets/XRP.png'),
  },
  {
    id: 'DOP',
    name: 'Polkadot',
    price: '1,224.3',
    percentage: '1,45',
    increased: true,
    imageUrl: require('../../assets/Polkadot.png'),
  },
  {
    id: 'LTC',
    name: 'Litecoin',
    price: '1,224.3',
    percentage: '1,45',
    increased: false,
    imageUrl: require('../../assets/Litecoin.png'),
  },
];

const CryptocurrenciesList = () => {
  const renderItem: ListRenderItem<Cryptocurrency> = ({
    item,
  }: {
    item: Cryptocurrency;
  }) => <Currency item={item} />;

  return (
    <View>
      <Header />
      <FlatListStyles>
        <FlatList
          data={data}
          keyExtractor={(item: Cryptocurrency) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </FlatListStyles>
      <AddCrypto>
        <SubTitle>+ Add a Cryptocurrency</SubTitle>
      </AddCrypto>
    </View>
  );
};

export default CryptocurrenciesList;
