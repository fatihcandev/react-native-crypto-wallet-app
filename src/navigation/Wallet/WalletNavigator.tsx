import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { WalletScreens } from 'types';
import {
  Overview,
  CoinDetails,
  AllAssets,
  AllTransactions,
  TransactionDetails,
} from 'screens/Wallet';

const WalletStack = createStackNavigator<WalletScreens>();

const WalletNavigator = () => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen name="Overview" component={Overview} />
      <WalletStack.Screen name="CoinDetails" component={CoinDetails} />
      <WalletStack.Screen name="AllAssets" component={AllAssets} />
      <WalletStack.Screen name="AllTransactions" component={AllTransactions} />
      <WalletStack.Screen name="TransactionDetails" component={TransactionDetails} />
    </WalletStack.Navigator>
  );
};

export default WalletNavigator;
