import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { TFAScreens } from 'types';
import { TFA, Confirmation } from 'screens/Profile/SecurityScreens/2FAScreens';

const TFAStack = createStackNavigator<TFAScreens>();

const TFANavigator = () => {
  return (
    <TFAStack.Navigator headerMode="none">
      <TFAStack.Screen name="TFA" component={TFA} />
      <TFAStack.Screen name="Confirmation" component={Confirmation} />
    </TFAStack.Navigator>
  );
};

export default TFANavigator;
