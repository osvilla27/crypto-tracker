import styled from 'styled-components/native';
import {Platform} from 'react-native';
import theme from '../../utils/theme';

interface ButtonProps {
  disabled: boolean;
}

export const AddButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props =>
    props.disabled ? theme.colors.gray : theme.colors.secondary}
  margin-top: 15px
  padding: 10px
  border-radius: 5px
  align-items: center
  width: 45%
`;

export const AddContainer = styled.View`
  align-items: flex-end;
`;

export const AddText = styled.Text<ButtonProps>`
  color: ${props =>
    props.disabled ? theme.colors.white : theme.colors.primary}
  font-size: ${theme.fontSizes.medium}
  font-weight: bold
`;

export const Container = styled.View`
  margin: 0px 20px
  flex: 1
  justify-content: center
`;

export const NotifactionsContainer = styled.View`
  position: absolute
  top: ${Platform.OS === 'ios' ? '100px' : '70px'}
  width: 100%
`

export const GoBack = styled.TouchableOpacity`
  position: absolute
  top: ${Platform.OS === 'ios' ? '60px' : '30px'}
`;
