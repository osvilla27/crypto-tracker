import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex-direction: row
  justify-content: space-between
  align-items: center
  padding: 20px
  padding-top: ${Platform.OS === 'ios' ? '50px' : '20px'}
  background-color: #385775
`;

export const Title = styled.Text`
  color: white
  font-size: 22px
  font-weight: bold
`;

export const ProfilePhoto = styled.Image`
  height: 50px
  width: 50px
  border-radius: 25px
`;
