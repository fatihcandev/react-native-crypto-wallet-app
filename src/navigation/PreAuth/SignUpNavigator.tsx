import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignUpScreens } from 'types';
import { SignUp, CreatePin, ConfirmPin } from 'screens/PreAuth/SignUpScreens';
import { Login } from 'screens/PreAuth/LoginScreens';

const SignUpStack = createStackNavigator<SignUpScreens>();

const SignUpNavigator = () => {
  return (
    <SignUpStack.Navigator headerMode="none">
      <SignUpStack.Screen name="SignUp" component={SignUp} />
      <SignUpStack.Screen name="Login" component={Login} />
      <SignUpStack.Screen name="CreatePin" component={CreatePin} />
      <SignUpStack.Screen name="ConfirmPin" component={ConfirmPin} />
    </SignUpStack.Navigator>
  );
};

export default SignUpNavigator;
