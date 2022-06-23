import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

export const AddCrypto = styled.TouchableOpacity`
  align-items: center
  margin: 20px
`;

export const FlatListStyles = styled.View`
  margin: 20px
  max-height-: ${height - 230}px
  flex-direction: row
  justify-content: center
`;