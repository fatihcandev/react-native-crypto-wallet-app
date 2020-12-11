import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { CreateVerifyPinScreens } from 'types';
import { CreateVerifyPin, ConfirmPin } from 'screens/PreAuth/CreateVerifyPinScreens';
import { BottomTabNavigator } from 'navigation/BottomTab';

const CreateVerifyPinStack = createStackNavigator<CreateVerifyPinScreens>();

const CreateVerifyPinNavigator = () => {
  return (
    <CreateVerifyPinStack.Navigator headerMode="none">
      <CreateVerifyPinStack.Screen name="CreateVerifyPin" component={CreateVerifyPin} />
      <CreateVerifyPinStack.Screen name="ConfirmPin" component={ConfirmPin} />
      <CreateVerifyPinStack.Screen name="Home" component={BottomTabNavigator} />
    </CreateVerifyPinStack.Navigator>
  );
};

export default CreateVerifyPinNavigator;
