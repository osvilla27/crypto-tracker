import React from 'react';
import {Title} from '../../library/utils/globalStyles';
import {Container, ProfilePhoto} from './styles';

const Header = () => (
  <Container>
    <Title withe>CryptoTracker Pro</Title>
    <ProfilePhoto source={require('../../assets/photo.jpg')} />
  </Container>
);

export default Header;
