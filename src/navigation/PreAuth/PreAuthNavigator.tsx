import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { PreAuthScreens } from 'types';
import { Onboarding, Welcome } from 'screens/PreAuth';
import LoginNavigator from './LoginNavigator';
import SignUpNavigator from './SignUpNavigator';

const PreAuthStack = createStackNavigator<PreAuthScreens>();

const PreAuthNavigator = () => {
  return (
    <PreAuthStack.Navigator>
      <PreAuthStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <PreAuthStack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <PreAuthStack.Screen name="Login" component={LoginNavigator} />
      <PreAuthStack.Screen name="SignUp" component={SignUpNavigator} />
    </PreAuthStack.Navigator>
  );
};

export default PreAuthNavigator;
