import {View} from 'react-native';
import React from 'react';
import {
  Container,
  CryptoIcon,
  IconContainer,
  TextName,
  Percentage,
} from './styles';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';
import {SubTitle} from '../../library/utils/globalStyles';

const Currency = ({item}: {item: Cryptocurrency}) => (
  <Container>
    <IconContainer>
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

export default Currency;
