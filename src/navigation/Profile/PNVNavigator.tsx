import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { PNVScreens } from 'types';
import {
  EnterPhoneNumber,
  ChooseDialingCode,
  VerifyCode,
  Done,
} from 'screens/Profile/PhoneNumberVerification';

const PNVStack = createStackNavigator<PNVScreens>();

const PNVNavigator = () => {
  return (
    <PNVStack.Navigator headerMode="none">
      <PNVStack.Screen name="EnterPhoneNumber" component={EnterPhoneNumber} />
      <PNVStack.Screen name="ChooseDialingCode" component={ChooseDialingCode} />
      <PNVStack.Screen name="VerifyCode" component={VerifyCode} />
      <PNVStack.Screen name="Done" component={Done} />
    </PNVStack.Navigator>
  );
};

export default PNVNavigator;
