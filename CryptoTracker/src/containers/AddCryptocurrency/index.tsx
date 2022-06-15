import React, {useState} from 'react';
import {SubTitle, Title} from '../../library/utils/globalStyles';
import {
  AddButton,
  AddText,
  AddContainer,
  Container,
  GoBack,
  MyInput,
} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const AddCryptocurrency = ({navigation}: Props) => {
  const [coin, setCoin] = useState('');

  return (
    <Container>
      <GoBack onPress={() => navigation.goBack()}>
        <SubTitle>{'<'} Back to list</SubTitle>
      </GoBack>
      <Title withe={false}>Add a Cryptocurrency</Title>
      <MyInput
        isActive={coin ? true : false}
        placeholder={'Use a name or ticker symbol...'}
        onChangeText={value => setCoin(value)}
        value={coin}
      />
      <AddContainer>
        <AddButton disabled={!coin ? true : false}>
          <AddText disabled={!coin ? true : false}>Add</AddText>
        </AddButton>
      </AddContainer>
    </Container>
  );
};

export default AddCryptocurrency;
