import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import { SignUpScreens, StackNavigationProps } from 'types';
import { useAlert } from 'utils';
import { validateEmailAddress, validatePassword } from 'utils/authValidation';

import { Background, Box, Illustration } from 'components';
import { Header } from 'components/Header';
import { AuthForm } from 'components/AuthForm';

const SignUp = ({ navigation }: StackNavigationProps<SignUpScreens, 'SignUp'>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const alert = useAlert();

  const { height } = Dimensions.get('window');

  const isEmailValid = email.length > 0 ? validateEmailAddress(email) : undefined;
  const isPasswordValid = password.length > 0 ? validatePassword(password) : undefined;
  const isButtonDisabled = [isEmailValid, isPasswordValid].some(c => !c) || loading;

  const handleNavigationToLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
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

  return (
    <Background>
      <Header {...{ navigation }} title="Create account" />
      <Box alignItems="center" justifyContent="flex-end" height={height * 0.37}>
        <Illustration name="office" width="308" height="171" />
      </Box>
      <AuthForm
        {...{
          email,
          password,
          isEmailValid,
          isPasswordValid,
          loading,
          isButtonDisabled,
          showPassword,
        }}
        isSignUp
        onEmailChange={v => setEmail(v)}
        onPasswordChange={v => setPassword(v)}
        onShowPasswordPress={() => setShowPassword(s => !s)}
        onNavigationToLoginOrSignUp={handleNavigationToLogin}
        onSignUpPress={handleSignUp}
        submitButtonLabel="Let's get started"
        bottomSectionLightTextLabel="Already have an account?"
        bottomSectionAccentTextLabel="Login"
      />
    </Background>
  );
};

export default SignUp;
