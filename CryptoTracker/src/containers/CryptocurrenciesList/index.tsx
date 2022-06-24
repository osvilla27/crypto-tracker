import {FlatList, ListRenderItem, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {FlatListStyles, AddCrypto} from './styles';
import Currency from '../../components/Currency';
import {SubTitle} from '../../utils/globalStyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Cryptocurrency} from '../../interfaces/cryptocurrency';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../store/actions';
import {bindActionCreators} from 'redux';
import {RootState} from '../../store';

interface Props extends NativeStackScreenProps<any, any> {}

const CryptocurrenciesList = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {currenciesStorage} = bindActionCreators(actions, dispatch);
  const currencies = useSelector(
    (state: RootState) => state.currencies?.cryptocurrencies,
  );

  useEffect(() => {
    currenciesStorage();
  }, [currencies]);

  const renderItem: ListRenderItem<Cryptocurrency> = ({
    item,
  }: {
    item: Cryptocurrency;
  }) => <Currency item={item} />;

  return (
    <View>
      <Header />
      <FlatListStyles>
        {currencies?.length === 0 ? (
          <SubTitle>The wishlist is empty!</SubTitle>
        ) : (
          <FlatList
            data={currencies}
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
