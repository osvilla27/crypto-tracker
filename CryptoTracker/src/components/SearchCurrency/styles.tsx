import styled from 'styled-components/native';
import theme from '../../utils/theme';

interface InputProps {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity`
  padding: 2px
  margin: 2px
  background-color: ${theme.colors.white}
  border-radius: 5px
`;

export const FlatListStyles = styled.View`
  max-height: 100px
  margin: 3px 0px
`;

export const MyInput = styled.TextInput<InputProps>`
  border-width: ${props => (props.isActive ? '2px' : '1px')}
  border-radius: 5px
  border-color: ${props =>
    props.isActive ? theme.colors.secondary : theme.colors.gray}
  margin-top: 20px
  font-size: ${theme.fontSizes.medium}
  padding: 10px 
  color: ${theme.colors.gray}
`;