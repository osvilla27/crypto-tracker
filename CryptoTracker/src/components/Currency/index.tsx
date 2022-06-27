import {Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
import theme from '../../utils/theme';

const Currency = ({item}: {item: Cryptocurrency}) => {
  const [change24Hour, setChange24Hour] = useState(false);
  const [modal, setModal] = useState(true);
  const {removeCurrency} = useCurrency();

  useEffect(() => {
    if (item.percentage >= 0) {
      setChange24Hour(true);
    }
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
        <TextName>${item.price.toFixed(2)}</TextName>
        <Percentage increased={change24Hour}>
          {change24Hour ? (
            <Icon name="north-east" size={16} color={theme.colors.green} />
          ) : (
            <Icon name="south-west" size={16} color={theme.colors.red} />
          )}
          {item.percentage.toFixed(2)}%
        </Percentage>
      </View>
    </Container>
  );
};

export default Currency;
