import React from 'react';
import {Container, Title, ProfilePhoto} from './styles';

const Header = () => {
  return (
    <Container>
      <Title>CryptoTracker Pro</Title>
      <ProfilePhoto source={require('../../assets/photo.jpg')} />
    </Container>
  );
};

export default Header;
