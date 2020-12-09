import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { WithdrawalScreens } from 'types';
import { Amount, EnterAddress, ScanQRCode, Confirmation } from 'screens/Withdrawal';

const WithdrawalStack = createStackNavigator<WithdrawalScreens>();

const WithdrawalNavigator = () => {
  return (
    <WithdrawalStack.Navigator>
      <WithdrawalStack.Screen name="Amount" component={Amount} />
      <WithdrawalStack.Screen name="EnterAddress" component={EnterAddress} />
      <WithdrawalStack.Screen name="ScanQRCode" component={ScanQRCode} />
      <WithdrawalStack.Screen name="Confirmation" component={Confirmation} />
    </WithdrawalStack.Navigator>
  );
};

export default WithdrawalNavigator;
