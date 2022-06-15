import styled from "styled-components/native";
import theme from "./theme";

interface TitleProps {
  withe: boolean
}

export const SubTitle = styled.Text`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.primary};
`;

export const Title = styled.Text<TitleProps>`
  color: ${props =>
    (props.withe ? theme.colors.withe : theme.colors.dark)}
  font-size: ${theme.fontSizes.large}
  font-weight: bold
`;

