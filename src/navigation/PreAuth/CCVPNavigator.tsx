import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { CCVPScreens } from 'types';
import { BottomTabNavigator } from 'navigation/BottomTab';
import { CreateConfirmVerifyPin } from 'screens/PreAuth';

const CCVPStack = createStackNavigator<CCVPScreens>();

const CCVPNavigator = () => {
  return (
    <CCVPStack.Navigator headerMode="none">
      <CCVPStack.Screen name="CreateConfirmVerifyPin" component={CreateConfirmVerifyPin} />
      <CCVPStack.Screen name="Home" component={BottomTabNavigator} />
    </CCVPStack.Navigator>
  );
};

export default CCVPNavigator;
