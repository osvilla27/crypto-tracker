import styled from 'styled-components/native';
import {Platform} from 'react-native';
import theme from '../../library/utils/theme';

export const Container = styled.View`
  flex-direction: row
  justify-content: space-between
  align-items: center
  padding: 20px
  padding-top: ${Platform.OS === 'ios' ? '50px' : '20px'}
  background-color: ${theme.colors.primary}
`;

export const ProfilePhoto = styled.Image`
  height: 50px
  width: 50px
  border-radius: 25px
`;

export const Title = styled.Text`
  color: ${theme.colors.withe}
  font-size: ${theme.fontSizes.large}
  font-weight: bold
`;
