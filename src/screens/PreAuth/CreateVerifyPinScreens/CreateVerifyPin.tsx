import React, { useCallback, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CreateVerifyPinScreens, StackNavigationProps } from 'types';
import { useAlert } from 'utils';
import { Background, Box, Header, Indicator, Loading, NumberPad } from 'components';

const CreateVerifyPin = ({
  navigation,
}: StackNavigationProps<CreateVerifyPinScreens, 'CreateVerifyPin'>) => {
  const [pin, setPin] = useState<string | null>(null);
  const [pinEntry, setPinEntry] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const alert = useAlert();
  const isLogin = pin !== null;

  const checkIfPinExists = useCallback(async () => {
    const createdPin = await AsyncStorage.getItem('pin');
    setPin(createdPin);
  }, []);

  useEffect(() => {
    checkIfPinExists();
  }, [checkIfPinExists]);

  useEffect(() => {
    if (pinEntry.length === 4) {
      setLoading(true);
      if (isLogin) {
        if (pinEntry === pin) {
          navigation.navigate('Home');
        } else {
          setLoading(false);
          setPinEntry('');
          alert('Invalid PIN', 'Please try again.');
        }
      } else {
        setLoading(false);
        navigation.navigate('ConfirmPin', {
          createdPin: pinEntry,
        });
      }
    }
  }, [alert, navigation, pin, pinEntry, isLogin]);

  const title = isLogin ? 'Verification required' : 'Create a PIN';
  const subtitle = isLogin
    ? 'Please enter your PIN to proceed'
    : 'Enhance the security of your account by creating a PIN code';

  return (
    <Background>
      {loading && <Loading isFullScreen />}
      <Header {...{ navigation, title, subtitle }} colorMode="dark" />
      <Box position="absolute">
        <TextInput
          value={pinEntry}
          onChangeText={p => setPinEntry(p)}
          maxLength={4}
          style={{ opacity: 0 }}
          keyboardType="numeric"
        />
      </Box>
      <Box marginTop="5xl" alignItems="center" marginBottom="10xl">
        <Indicator type="pin" pinLength={pinEntry.length} />
      </Box>
      <NumberPad
        onNumberPress={num => setPinEntry(p => p.concat(num))}
        onDeletePress={() => setPinEntry(p => p.slice(1, p.length))}
        onForgotPress={() => true}
        {...{ isLogin }}
      />
    </Background>
  );
};

export default CreateVerifyPin;
