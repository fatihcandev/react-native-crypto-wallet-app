import React, { useCallback, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CreateVerifyPinScreens, StackNavigationProps } from 'types';
import { useAlert } from 'utils';
import { Background, Box, Header, Indicator, Loading, NumberPad } from 'components';

const ConfirmPin = ({
  navigation,
  route,
}: StackNavigationProps<CreateVerifyPinScreens, 'ConfirmPin'>) => {
  const [pinEntry, setPinEntry] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { createdPin } = route?.params;

  const alert = useAlert();

  const savePin = useCallback(async () => {
    await AsyncStorage.setItem('pin', pinEntry, () => {
      navigation.navigate('Home');
    });
  }, [navigation, pinEntry]);

  useEffect(() => {
    if (pinEntry.length === 4) {
      setLoading(true);
      if (pinEntry === createdPin) {
        savePin();
        setLoading(false);
      } else {
        setLoading(false);
        setPinEntry('');
        alert('Invalid PIN', 'Please try again.');
      }
    }
  }, [alert, createdPin, pinEntry, savePin]);

  return (
    <Background>
      {loading && <Loading isFullScreen />}
      <Header
        {...{ navigation }}
        title="Confirm PIN"
        subtitle="Repeat the PIN code to continue"
        colorMode="dark"
      />
      <Box position="absolute">
        <TextInput
          value={pinEntry}
          onChangeText={p => setPinEntry(p)}
          maxLength={4}
          style={{ opacity: 0 }}
          keyboardType="numeric"
        />
      </Box>
      <Box marginTop="5xl" alignItems="center">
        <Indicator type="pin" pinLength={pinEntry.length} />
      </Box>
      <Box flex={1} justifyContent="center">
        <NumberPad
          onNumberPress={num => setPinEntry(p => p.concat(num))}
          onDeletePress={() => setPinEntry(p => p.slice(1, p.length))}
        />
      </Box>
    </Background>
  );
};

export default ConfirmPin;
