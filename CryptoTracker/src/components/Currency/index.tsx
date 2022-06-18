import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import {
  Container,
  CryptoIcon,
  IconContainer,
  TextName,
  Percentage,
} from './styles';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';
import {SubTitle} from '../../library/utils/globalStyles';
import useSaveCurrency from '../../library/hooks/useSaveCurrency';

const Currency = ({item}: {item: Cryptocurrency}) => {
  const [modal, setModal] = useState(true);
  const {hanledRemoveCurrency} = useSaveCurrency();

  const Modal = async () => {
    Alert.alert(
      `Do you want to delete "${item.symbol}"?`,
      'A deleted coin cannot be recovered',
      [
        {text: 'No', style: 'cancel'},
        {
          text: 'Delete',
          onPress: () => {
            hanledRemoveCurrency(item.id);
            setModal(!modal);
          },
        },
      ],
    );
  };

  return (
    <Container>
      <IconContainer onPress={() => Modal()}>
        <CryptoIcon source={require('../../assets/Bitcoin.png')} />
        <View>
          <TextName>{item.name}</TextName>
          <SubTitle>{item.id}</SubTitle>
        </View>
      </IconContainer>
      <View>
        <TextName>${item.price}</TextName>
        <Percentage increased={item.increased}>{item.percentage}%</Percentage>
      </View>
    </Container>
  );
};

export default Currency;
