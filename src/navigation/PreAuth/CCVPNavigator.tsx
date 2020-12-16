import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { CCVPScreens } from 'types';
import KYCNavigator from 'navigation/KnowYourCustomer/KYCNavigator';
import { CreateConfirmVerifyPin } from 'screens/PreAuth';

const CCVPStack = createStackNavigator<CCVPScreens>();

const CCVPNavigator = () => {
  return (
    <CCVPStack.Navigator headerMode="none">
      <CCVPStack.Screen name="CreateConfirmVerifyPin" component={CreateConfirmVerifyPin} />
      <CCVPStack.Screen name="Home" component={KYCNavigator} />
    </CCVPStack.Navigator>
  );
};

export default CCVPNavigator;
