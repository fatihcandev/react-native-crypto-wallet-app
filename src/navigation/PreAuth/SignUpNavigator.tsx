import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignUpScreens } from 'types';

import { Login } from 'screens/PreAuth/LoginScreens';
import { SignUp } from 'screens/PreAuth/SignUp';

import CCVPNavigator from './CCVPNavigator';

const SignUpStack = createStackNavigator<SignUpScreens>();

const SignUpNavigator = () => {
  return (
    <SignUpStack.Navigator headerMode="none">
      <SignUpStack.Screen name="SignUp" component={SignUp} />
      <SignUpStack.Screen name="Login" component={Login} />
      <SignUpStack.Screen name="CreateConfirmVerifyPin" component={CCVPNavigator} />
    </SignUpStack.Navigator>
  );
};

export default SignUpNavigator;
