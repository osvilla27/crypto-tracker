import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { Container, Title, ProfilePhoto } from './styles'

const Header = () => {
  return (
    <SafeAreaView>
      <Container>
        <Title>CryptoTracker Pro</Title>
        <ProfilePhoto source={require('../../assets/photo.jpg')}/>
      </Container>
    </SafeAreaView>
  )
}

export default Header
