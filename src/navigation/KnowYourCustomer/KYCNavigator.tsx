import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { KYCScreens } from 'types';
import {
  PersonalInformation,
  DocumentVerification,
  ScanFrontSide,
  ScanBackSide,
  NationalIDScan,
  Done,
} from 'screens/KnowYourCustomer';

const KYCStack = createStackNavigator<KYCScreens>();

const KYCNavigator = () => {
  return (
    <KYCStack.Navigator>
      <KYCStack.Screen name="PersonalInformation" component={PersonalInformation} />
      <KYCStack.Screen name="DocumentVerification" component={DocumentVerification} />
      <KYCStack.Screen name="ScanFrontSide" component={ScanFrontSide} />
      <KYCStack.Screen name="ScanBackSide" component={ScanBackSide} />
      <KYCStack.Screen name="NationalIDScan" component={NationalIDScan} />
      <KYCStack.Screen name="Done" component={Done} />
    </KYCStack.Navigator>
  );
};

export default KYCNavigator;
