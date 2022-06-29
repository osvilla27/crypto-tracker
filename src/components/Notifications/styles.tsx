import styled from "styled-components/native";
import theme from "../../utils/theme";

export const Container = styled.View`
  flex-direction: row
  justify-content: center 
  margin: 10px
  padding:10px
  border-radius: 5px
  background-color: ${theme.colors.white}
`
export const Notification = styled.Text`
  text-align: center
  font-weight: bold
  color: ${theme.colors.red}
  font-size: ${theme.fontSizes.medium}
  opacity: .5
`