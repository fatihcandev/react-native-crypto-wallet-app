import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SMTYFScreens } from 'types';
import { Amount, ChooseRecipient, AddMessage, Confirmation } from 'screens/SendMoneyToFriend';

const SMTYFStack = createStackNavigator<SMTYFScreens>();

const SMTYFNavigator = () => {
  return (
    <SMTYFStack.Navigator headerMode="none">
      <SMTYFStack.Screen name="Amount" component={Amount} />
      <SMTYFStack.Screen name="ChooseRecipient" component={ChooseRecipient} />
      <SMTYFStack.Screen name="AddMessage" component={AddMessage} />
      <SMTYFStack.Screen name="Confirmation" component={Confirmation} />
    </SMTYFStack.Navigator>
  );
};

export default SMTYFNavigator;
