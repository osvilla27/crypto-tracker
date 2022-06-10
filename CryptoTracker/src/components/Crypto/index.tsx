import { View } from 'react-native'
import React from 'react'
import {Container, CryptoIcon, IconContainer, SubTitle, Title } from './styles'

interface Cryptocurrencies {
  id: string,
  name: string,
  price: string,
  percentage: string,
  imageUrl: string,
}

const Crypto = ({ item }: { item: Cryptocurrencies }) => {
  return (
    <Container>
      <IconContainer>
       <CryptoIcon source={item.imageUrl}/>
       <View>
        <Title>{item.name}</Title>
        <SubTitle>{item.id}</SubTitle>
       </View>
      </IconContainer>
      <View>
        <Title left>${item.price}</Title>
        <SubTitle left increased>{item.percentage}%</SubTitle>
      </View>
    </Container>
  )
}

export default Crypto