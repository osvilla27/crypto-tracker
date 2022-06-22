import React from 'react';
import {SubTitle, Title} from '../../utils/globalStyles';
import {AddButton, AddText, AddContainer, Container, GoBack} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SearchCurrency from '../../components/SearchCurrency';
import useSaveCurrency from '../../store/hooks/useSaveCurrency';
import {useAppSelector} from '../../store/hooks';

interface Props extends NativeStackScreenProps<any, any> {}

const AddCryptocurrency = ({navigation}: Props) => {
  const isValid = useAppSelector(state => state.currency.isValid);
  const {seveCurrency} = useSaveCurrency();

  const handleCryptocurrency = () => {
    seveCurrency();
    navigation.navigate('ListCrypto');
  };

  return (
    <Container>
      <GoBack onPress={() => navigation.goBack()}>
        <SubTitle>{'<'} Back to list</SubTitle>
      </GoBack>
      <Title white={false}>Add a Cryptocurrency</Title>
      <SearchCurrency />
      <AddContainer>
        <AddButton disabled={!isValid} onPress={() => handleCryptocurrency()}>
          <AddText disabled={!isValid}>Add</AddText>
        </AddButton>
      </AddContainer>
    </Container>
  );
};

export default AddCryptocurrency;
