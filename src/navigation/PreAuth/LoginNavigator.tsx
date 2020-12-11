import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreens } from 'types';
import { Login, ForgotPassword, CheckYourEmail, NewPassword } from 'screens/PreAuth/LoginScreens';
import { SignUp } from 'screens/PreAuth';
import CreateVerifyPinNavigator from './CreateVerifyPinNavigator';

const LoginStack = createStackNavigator<LoginScreens>();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignUp" component={SignUp} />
      <LoginStack.Screen name="CreateVerifyPin" component={CreateVerifyPinNavigator} />
      <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <LoginStack.Screen name="CheckYourEmail" component={CheckYourEmail} />
      <LoginStack.Screen name="NewPassword" component={NewPassword} />
    </LoginStack.Navigator>
  );
};

export default LoginNavigator;
