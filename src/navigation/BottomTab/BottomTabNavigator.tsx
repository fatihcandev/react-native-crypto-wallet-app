import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabScreens } from 'types';
import { Overview, Portfolio, Transactions } from 'screens/BottomTab';

const BottomTab = createBottomTabNavigator<BottomTabScreens>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Overview" component={Overview} />
      <BottomTab.Screen name="Portfolio" component={Portfolio} />
      <BottomTab.Screen name="Transactions" component={Transactions} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
