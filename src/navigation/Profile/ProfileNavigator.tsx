import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreens } from 'types';
import { Overview, ChooseCurrency, PersonalInformation } from 'screens/Profile';
import SecurityNavigator from './SecurityNavigator';
import PNVNavigator from './PNVNavigator';

const ProfileStack = createStackNavigator<ProfileScreens>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Overview" component={Overview} />
      <ProfileStack.Screen name="PersonalInformation" component={PersonalInformation} />
      <ProfileStack.Screen name="ChooseCurrency" component={ChooseCurrency} />
      <ProfileStack.Screen name="Security" component={SecurityNavigator} />
      <ProfileStack.Screen name="PhoneNumberVerification" component={PNVNavigator} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
