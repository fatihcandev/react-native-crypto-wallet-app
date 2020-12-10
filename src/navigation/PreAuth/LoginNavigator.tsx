import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreens } from 'types';
import {
  Login,
  Verification,
  ForgotPassword,
  CheckYourEmail,
  NewPassword,
} from 'screens/PreAuth/LoginScreens';

const LoginStack = createStackNavigator<LoginScreens>();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Verification" component={Verification} />
      <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <LoginStack.Screen name="CheckYourEmail" component={CheckYourEmail} />
      <LoginStack.Screen name="NewPassword" component={NewPassword} />
    </LoginStack.Navigator>
  );
};

export default LoginNavigator;
