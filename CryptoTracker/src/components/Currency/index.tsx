import {View} from 'react-native';
import React from 'react';
import {
  Container,
  CryptoIcon,
  IconContainer,
  SubTitle,
  Title,
  Percentage,
} from './styles';
import {Cryptocurrency} from '../../interfaces/Cryptocurrency';

const Currency = ({item}: {item: Cryptocurrency}) => (
  <Container>
    <IconContainer>
      <CryptoIcon source={item.imageUrl} />
      <View>
        <Title>{item.name}</Title>
        <SubTitle>{item.id}</SubTitle>
      </View>
    </IconContainer>
    <View>
      <Title>${item.price}</Title>
      <Percentage increased={item.increased}>{item.percentage}%</Percentage>
    </View>
  </Container>
);

export default Currency;
