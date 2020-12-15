import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { PreAuthScreens } from 'types';
import { Onboarding } from 'screens/PreAuth';
import { Welcome } from 'screens/PreAuth/Welcome';
import LoginNavigator from './LoginNavigator';
import SignUpNavigator from './SignUpNavigator';

const PreAuthStack = createStackNavigator<PreAuthScreens>();

const PreAuthNavigator = () => {
  return (
    <PreAuthStack.Navigator headerMode="none">
      <PreAuthStack.Screen name="Onboarding" component={Onboarding} />
      <PreAuthStack.Screen name="Welcome" component={Welcome} />
      <PreAuthStack.Screen name="Login" component={LoginNavigator} />
      <PreAuthStack.Screen name="SignUp" component={SignUpNavigator} />
    </PreAuthStack.Navigator>
  );
};

export default PreAuthNavigator;
