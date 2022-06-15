import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 0px
  flex-direction: row
  justify-content: space-between
  border-bottom-width: 0.3px
`;

export const CryptoIcon = styled.Image`
  height: 50px
  width: 50px
  border-radius: 25px
  margin-right: 10px
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: bold
  color: black
  font-size: 18px
  ${props =>
    props.left &&
    `
    text-align: right;
  `}
`;

export const Percentage = styled.Text`
  font-size: 18px
  color: green
  text-align: right
  ${props =>
    props.increased &&
    `
    color: red
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
`;
