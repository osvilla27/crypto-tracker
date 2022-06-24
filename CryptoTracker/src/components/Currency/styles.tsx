import styled from 'styled-components/native';
import theme from '../../utils/theme';

interface PercentageProps {
  increased: boolean;
}

interface SourceProps {
  source: string;
}

export const Container = styled.View`
  padding: 20px 0px
  flex-direction: row
  justify-content: space-between
  border-bottom-width: 0.3px
  border-color: ${theme.colors.gray}
`;

export const CryptoIcon = styled.Image<SourceProps>`
  height: 50px
  width: 50px
  border-radius: 25px
  margin-right: 10px
`;

export const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TextName = styled.Text`
  font-weight: bold
  color: ${theme.colors.dark}
  font-size: ${theme.fontSizes.medium}
`;

export const Percentage = styled.Text<PercentageProps>`
  font-size:  ${theme.fontSizes.small}
  text-align: right
  color: ${props => (props.increased ? theme.colors.green : theme.colors.red)};
`;