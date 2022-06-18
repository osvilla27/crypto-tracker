import styled from "styled-components/native";
import theme from "./theme";

interface TitleProps {
  white: boolean
}

export const SubTitle = styled.Text`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.primary};
`;

export const Title = styled.Text<TitleProps>`
  color: ${props =>
    (props.white ? theme.colors.white : theme.colors.dark)}
  font-size: ${theme.fontSizes.large}
  font-weight: bold
`;

