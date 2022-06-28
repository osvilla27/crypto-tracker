import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {Container, Notification} from './styles';

const Notifications = () => {
  const netInfo = useNetInfo();
  return (
    <>
      {!netInfo.isConnected && (
        <Container>
          <Notification>Network not available</Notification>
        </Container>
      )}
    </>
  );
};

export default Notifications;
