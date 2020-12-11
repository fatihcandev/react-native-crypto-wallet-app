import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { Easing, timing, useValue } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import { SignUpScreens, StackNavigationProps } from 'types';
import { useAlert, useKeyboardDidShow } from 'utils';
import { validateEmailAddress, validateName, validatePassword } from 'utils/authValidation';
import {
  Background,
  Box,
  ContentContainer,
  Header,
  Illustration,
  StyledInput,
  AuthBottomSection,
} from 'components';

const SignUp = ({ navigation }: StackNavigationProps<SignUpScreens, 'SignUp'>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const keyboardDidShow = useKeyboardDidShow();
  const alert = useAlert();

  const { height } = Dimensions.get('window');
  const UNFOCUSED_HEIGHT = (height * 60) / 100;
  const FOCUSED_HEIGHT = (height * 87) / 100;
  const containerInitialHeight = useValue(UNFOCUSED_HEIGHT);

  const isNameValid = name.length > 0 ? validateName(name) : undefined;
  const isEmailValid = emailAddress.length > 0 ? validateEmailAddress(emailAddress) : undefined;
  const isPasswordValid = password.length > 0 ? validatePassword(password) : undefined;
  const isButtonDisabled = !isNameValid || !isEmailValid || !isPasswordValid || loading;

  const handleNavigationToLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const res = await auth().createUserWithEmailAndPassword(emailAddress, password);
      if (res) {
        const { additionalUserInfo } = res;
        if (additionalUserInfo) {
          const { isNewUser } = additionalUserInfo;
          await AsyncStorage.setItem('isNewUser', `${isNewUser}`);
        }
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setLoading(false);
        alert('Error', 'The email address is already in use by another account.', [
          { text: 'Login instead', onPress: handleNavigationToLogin },
        ]);
      }
    }
  };

  const containerAnimConfig = {
    duration: 200,
    easing: Easing.inOut(Easing.ease),
  };

  useEffect(() => {
    if (keyboardDidShow) {
      timing(containerInitialHeight, { ...containerAnimConfig, toValue: FOCUSED_HEIGHT }).start();
    } else {
      timing(containerInitialHeight, { ...containerAnimConfig, toValue: UNFOCUSED_HEIGHT }).start();
    }
  }, [
    FOCUSED_HEIGHT,
    UNFOCUSED_HEIGHT,
    containerAnimConfig,
    containerInitialHeight,
    keyboardDidShow,
  ]);

  return (
    <Background>
      <Header {...{ navigation }} title="Create account" colorMode="dark" />
      <Box alignItems="center" marginTop="9xl">
        <Illustration name="office" width="308" height={`${(height * 21.05) / 100}`} />
      </Box>
      <ContentContainer height={containerInitialHeight}>
        <StyledInput
          label="Full Name"
          value={name}
          onChangeText={v => setName(v)}
          disabled={loading}
          errorText={isNameValid === undefined || isNameValid ? '' : 'Name is not valid'}
        />
        <StyledInput
          label="Email Address"
          value={emailAddress}
          onChangeText={v => setEmailAddress(v)}
          keyboardType="email-address"
          disabled={loading}
          errorText={isEmailValid === undefined || isEmailValid ? '' : 'Email address is not valid'}
        />
        <StyledInput
          {...{ showPassword }}
          label="Password"
          value={password}
          onChangeText={v => setPassword(v)}
          isPassword
          onShowPasswordPress={() => setShowPassword(s => !s)}
          disabled={loading}
          errorText={
            isPasswordValid === undefined || isPasswordValid ? '' : 'Password is not valid'
          }
        />
        <Box marginTop="m">
          <AuthBottomSection
            mainButtonVariant="primary"
            mainButtonLabel="Let's Get Started"
            mainButtonLoading={loading}
            mainButtonDisabled={isButtonDisabled}
            lightTextLabel="Already have an account?"
            accentTextLabel="Login"
            onMainButtonPress={handleSignUp}
            onAccentTextPress={handleNavigationToLogin}
          />
        </Box>
      </ContentContainer>
    </Background>
  );
};

export default SignUp;
