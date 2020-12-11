import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SecurityScreens } from 'types';
import { Security, ChangePassword, ChangePin, NewPin } from 'screens/Profile/SecurityScreens';
import TFANavigator from './2FANavigator';

const SecurityStack = createStackNavigator<SecurityScreens>();

const SecurityNavigator = () => {
  return (
    <SecurityStack.Navigator headerMode="none">
      <SecurityStack.Screen name="Security" component={Security} />
      <SecurityStack.Screen name="ChangePassword" component={ChangePassword} />
      <SecurityStack.Screen name="ChangePin" component={ChangePin} />
      <SecurityStack.Screen name="NewPin" component={NewPin} />
      <SecurityStack.Screen name="TFA" component={TFANavigator} />
    </SecurityStack.Navigator>
  );
};

export default SecurityNavigator;
