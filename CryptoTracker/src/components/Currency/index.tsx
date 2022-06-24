import {Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Container,
  CryptoIcon,
  IconContainer,
  TextName,
  Percentage,
} from './styles';
import {Cryptocurrency} from '../../interfaces/cryptocurrency';
import {SubTitle} from '../../utils/globalStyles';
import {useCurrency} from '../../store/hooks/useCurrency';

const Currency = ({item}: {item: Cryptocurrency}) => {
  const [change24Hour, setChange24Hour] = useState(false);
  const [modal, setModal] = useState(true);
  const {removeCurrency} = useCurrency();

  const change = (percentage: number) => {
    if (percentage < 0) {
      setChange24Hour(false);
    } else {
      setChange24Hour(true);
    }
  };

  useEffect(() => {
    change(item.percentage);
  }, [item.percentage]);

  const showAlert = () => {
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
      <IconContainer onPress={showAlert}>
        <CryptoIcon source={{uri: item.imageUrl}} />
        <View>
          <TextName>{item.name}</TextName>
          <SubTitle>{item.symbol}</SubTitle>
        </View>
      </IconContainer>
      <View>
        <TextName>${String(item.price.toFixed(2))}</TextName>
        <Percentage increased={change24Hour}>
          {String(item.percentage.toFixed(2))}%
        </Percentage>
      </View>
    </Container>
  );
};

export default Currency;
