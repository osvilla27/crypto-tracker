import styled from 'styled-components/native';
import {Platform} from 'react-native';
import theme from '../../library/utils/theme';

interface InputProps {
  isActive: boolean;
}

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
    props.disabled ? theme.colors.withe : theme.colors.primary}
  font-size: ${theme.fontSizes.medium}
  font-weight: bold
`;

export const Container = styled.View`
  margin: 20px
  flex: 1
  justify-content: center
`;

export const GoBack = styled.TouchableOpacity`
  position: absolute
  top: ${Platform.OS === 'ios' ? '40px' : '10px'}
`;

export const MyInput = styled.TextInput<InputProps>`
  border-width: ${props => (props.isActive ? '2px' : '1px')}
  border-radius: 5px
  border-color: ${props =>
    props.isActive ? theme.colors.secondary : theme.colors.gray}
  margin-top: 20px
  font-size: ${theme.fontSizes.medium}
  padding: 10px 
`;
