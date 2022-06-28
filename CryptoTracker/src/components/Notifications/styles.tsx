import { Platform } from "react-native";
import styled from "styled-components/native";
import theme from "../../utils/theme";

export const Container = styled.View`
  position: absolute
  top: ${Platform.OS === 'ios' ? '130px' : '100px'}
  width: 90%
 
`
export const Notification = styled.Text`
  text-align: center
  font-weight: bold
  color: ${theme.colors.red}
  font-size: ${theme.fontSizes.medium}
  opacity: .5
`