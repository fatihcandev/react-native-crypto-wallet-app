import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import { useAlert } from 'utils';
import { Background, StyledButton } from 'components';

const Overview = () => {
  const alert = useAlert();
  const checkIfNewUser = useCallback(async () => {
    try {
      const isNewUser = Boolean(await AsyncStorage.getItem('isNewUser'));
      if (isNewUser) {
        alert('You are a new user!');
      } else {
        alert('You are an existing user!');
      }
    } catch (error) {}
  }, [alert]);

  useEffect(() => {
    checkIfNewUser();
  }, [checkIfNewUser]);

  const handleSignOut = async () => {
    await auth().signOut();
  };

  return (
    <Background>
      <StyledButton variant="positive" label="Sign out" onPress={handleSignOut} />
    </Background>
  );
};

export default Overview;
