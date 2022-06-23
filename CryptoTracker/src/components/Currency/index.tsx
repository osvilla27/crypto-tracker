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
import {SubTitle} from '../../utils/globalStyles';
import {useCurrency} from '../../store/hooks/useCurrency';

const Currency = ({item}: {item: Cryptocurrency}) => {
  const [modal, setModal] = useState(true);
  const {removeCurrency} = useCurrency();
  const Modal = () => {
    Alert.alert(
      `Do you want to delete "${item.symbol}"?`,
      'A deleted coin cannot be recovered',
      [
        {text: 'No', style: 'cancel'},
        {
          text: 'Delete',
          onPress: () => {
            removeCurrency(item.id);
            setModal(!modal);
          },
        },
      ],
    );
  };

  return (
    <Container>
      <IconContainer onPress={() => Modal()}>
        <CryptoIcon source={item.imageUrl} />
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
