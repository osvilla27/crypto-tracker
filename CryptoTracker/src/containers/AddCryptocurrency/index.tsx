import React from 'react';
import {SubTitle, Title} from '../../utils/globalStyles';
import {AddButton, AddText, AddContainer, Container, GoBack, ContainerNotificatios} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SearchCurrency from '../../components/SearchCurrency';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../../store/actions';
import {RootState} from '../../store';
import {useCurrency} from '../../store/hooks/useCurrency';
import Notifications from '../../components/Notifications';

interface Props extends NativeStackScreenProps<any, any> {}

const AddCryptocurrency = ({navigation}: Props) => {
  const disabled = useSelector((state: RootState) => state.currencies.isValid);
  const dispatch = useDispatch();
  const {isValid} = bindActionCreators(actions, dispatch);
  const {saveCurrency} = useCurrency();

  const handleCryptocurrency = () => {
    saveCurrency();
    isValid(false);
    navigation.navigate('ListCrypto');
  };

  return (
    <Container>
      <GoBack onPress={() => navigation.goBack()}>
        <SubTitle>{'<'} Back to list</SubTitle>
      </GoBack>
      <ContainerNotificatios>
        <Notifications />
      </ContainerNotificatios>
      <Title white={false}>Add a Cryptocurrency</Title>
      <SearchCurrency />
      <AddContainer>
        <AddButton disabled={!disabled} onPress={handleCryptocurrency}>
          <AddText disabled={!disabled}>Add</AddText>
        </AddButton>
      </AddContainer>
    </Container>
  );
};

export default AddCryptocurrency;
