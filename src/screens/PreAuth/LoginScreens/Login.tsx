import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import { SignUpScreens, StackNavigationProps } from 'types';
import { useAlert } from 'utils';
import { validateEmailAddress, validatePassword } from 'utils/authValidation';
import { Background, Box, Header, Illustration, AuthForm } from 'components';

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

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      if (res) {
        const { additionalUserInfo } = res;
        if (additionalUserInfo) {
          const { isNewUser } = additionalUserInfo;
          await AsyncStorage.setItem('isNewUser', `${isNewUser}`);
        }
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setLoading(false);
        alert(
          'Error',
          'The email and password you entered did not match our records. Please double check and try again.',
        );
      }
    }
  };

  return (
    <Background>
      <Header {...{ navigation }} title="Welcome Back!" colorMode="dark" />
      <Box alignItems="center" marginTop="8xl">
        <Illustration name="login" width="308" height={`${(height * 28) / 100}`} />
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
        onEmailChange={v => setEmail(v)}
        onPasswordChange={v => setPassword(v)}
        onShowPasswordPress={() => setShowPassword(s => !s)}
        onNavigationToLoginOrSignUp={() => navigation.navigate('SignUp')}
        onSignUpPress={handleLogin}
        onForgotPasswordPress={() => true}
        submitButtonLabel="Login"
        bottomSectionLightTextLabel="Don't have an account?"
        bottomSectionAccentTextLabel="Sign Up"
      />
    </Background>
  );
};

export default SignUp;
