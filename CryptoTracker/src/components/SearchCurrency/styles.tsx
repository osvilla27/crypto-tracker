import styled from 'styled-components/native';
import theme from '../../library/utils/theme';

interface InputProps {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity`
  border-bottom-width: 0.5px;
  width: 50%;
`;

export const FlatListStyles = styled.View`
  height: 40px;
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
