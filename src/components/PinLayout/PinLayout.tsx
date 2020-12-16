import React, { useEffect } from 'react';
import { TextInput } from 'react-native';

import { Background, Box, Indicator } from 'components';
import { Header } from 'components/Header';
import { NumberPad } from 'components/NumberPad';

import PinLayoutStyle from './PinLayout.style';
import Loading from 'components/Loading';

type IPinLayout = {
  pinEntry: string;
  loading: boolean;
  isLogin: boolean;
  isConfirm: boolean;
  onCheckIfPinExists: () => void;
  onPinEntryFinished: () => void;
  onPinChange: (v: string) => void;
  onPinDelete: () => void;
};

const PinLayout: React.FC<IPinLayout> = ({
  isLogin,
  isConfirm,
  pinEntry,
  loading,
  onCheckIfPinExists,
  onPinEntryFinished,
  onPinChange,
  onPinDelete,
}) => {
  useEffect(() => {
    onCheckIfPinExists();
  }, [onCheckIfPinExists]);

  useEffect(() => {
    onPinEntryFinished();
  }, [onPinEntryFinished]);

  const title = isLogin || isConfirm ? 'Verification required' : 'Create a PIN';
  const subtitle =
    isLogin || isConfirm
      ? 'Please enter your PIN to proceed'
      : 'Enhance the security of your account by creating a PIN code';

  return (
    <Background>
      {loading && <Loading isFullScreen />}
      <Header {...{ title, subtitle }} />
      <Box position="absolute">
        <TextInput
          value={pinEntry}
          onChangeText={onPinChange}
          maxLength={4}
          style={{ opacity: 0 }}
          keyboardType="numeric"
        />
      </Box>
      <Box alignItems="center" style={PinLayoutStyle.indicator}>
        <Indicator type="pin" pinLength={pinEntry.length} />
      </Box>
      <Box flex={1} justifyContent="center">
        <NumberPad
          onNumberPress={onPinChange}
          onDeletePress={onPinDelete}
          onForgotPress={() => true}
          {...{ isLogin }}
        />
      </Box>
    </Background>
  );
};

export default PinLayout;
