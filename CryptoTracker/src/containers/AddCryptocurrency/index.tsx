import React, {useContext} from 'react';
import {SubTitle, Title} from '../../library/utils/globalStyles';
import {AddButton, AddText, AddContainer, Container, GoBack} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SearchCurrency from '../../components/SearchCurrency';
import useSaveCurrency from '../../library/hooks/useSaveCurrency';
import CurrencyContext from '../../store/context/CurrencyContext';

interface Props extends NativeStackScreenProps<any, any> {}

const AddCryptocurrency = ({navigation}: Props) => {
  const {hanledSeveCurrency} = useSaveCurrency();
  const {
    currencyState: {cryptocurrency},
    isValid,
    setIsValid,
  } = useContext(CurrencyContext);

  const handleCryptocurrency = () => {
    hanledSeveCurrency(cryptocurrency);
    setIsValid(false);
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
        <AddButton disabled={!isValid} onPress={handleCryptocurrency}>
          <AddText disabled={!isValid}>Add</AddText>
        </AddButton>
      </AddContainer>
    </Container>
  );
};

export default AddCryptocurrency;
