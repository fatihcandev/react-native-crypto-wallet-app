import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

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

  useEffect(() => {
    if (pinEntry.length === 4) {
      setLoading(true);
      if (pinEntry === createdPin) {
        navigation.navigate('Home');
      } else {
        setLoading(false);
        setPinEntry('');
        alert('Invalid PIN', 'Please try again.');
      }
    }
  }, [alert, createdPin, navigation, pinEntry]);

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
      <Box marginTop="5xl" alignItems="center" marginBottom="10xl">
        <Indicator type="pin" pinLength={pinEntry.length} />
      </Box>
      <NumberPad
        onNumberPress={num => setPinEntry(p => p.concat(num))}
        onDeletePress={() => setPinEntry(p => p.slice(1, p.length))}
      />
    </Background>
  );
};

export default ConfirmPin;
