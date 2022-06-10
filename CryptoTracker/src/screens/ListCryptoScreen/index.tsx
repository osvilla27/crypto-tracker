import { FlatList, ListRenderItem, View, Text } from 'react-native';
import React from 'react';
import Crypto from '../../components/Crypto';
import Header from '../../components/Header';
import { FlatListStyles, AddCrypto } from './styles';
import { SubTitle } from '../../components/Crypto/styles';


interface Cryptocurrencies{
  id: string,
  name: string,
  price: string,
  percentage: string,
  imageUrl: string,
}

const data: Cryptocurrencies[] = [
  {
    id:'BCT',
    name: 'Bitcoin',
    price: '1,224.3',
    percentage: '1,45',
    imageUrl: require('../../assets/Bitcoin.png'),
  },
  {
    id:'ETH',
    name: 'Ethereum',
    price: '123,224.3',
    percentage: '1,45',
    imageUrl: require('../../assets/Ethereum.png'),
  },
  {
    id:'XRP',
    name: 'XRP',
    price: '1,224.3',
    percentage: '1,45',
    imageUrl: require('../../assets/XRP.png'),
  },
  {
    id:'DOP',
    name: 'Polkadot',
    price: '1,224.3',
    percentage: '1,45',
    imageUrl: require('../../assets/Polkadot.png'),
  },
  {
    id:'LTC',
    name: 'Litecoin',
    price: '1,224.3',
    percentage: '1,45',
    imageUrl: require('../../assets/Litecoin.png'),
  },
] 

const ListCryptoScreen = () => {
  
  const renderItem : ListRenderItem<Cryptocurrencies> = ({ item }: { item: Cryptocurrencies }) => (
   <Crypto item={item} />
  )
  return (
    <View>
      <Header/>
      <FlatListStyles>
        <FlatList
          data={data}
          keyExtractor={(item:Cryptocurrencies) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </FlatListStyles>  

      <AddCrypto>
        <SubTitle>+ Add a Cryptocurrency</SubTitle>
      </AddCrypto>
    </View>
  )
}

export default ListCryptoScreen;