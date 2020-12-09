import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';
import { AppContext } from 'context';

import Box from './Box';

interface IBackgroundProps {
  isBlue?: boolean;
}

const Background: React.FC<IBackgroundProps> = ({ isBlue, children }) => {
  const { state } = useContext(AppContext);
  const theme = useTheme<Theme>();
  const { colors } = theme;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={isBlue ? colors.bgPrimaryBlue : colors.bgPrimary}
        barStyle={state.darkMode ? 'light-content' : 'dark-content'}
      />
      <Box flex={1} backgroundColor={isBlue ? 'bgPrimaryBlue' : 'bgPrimary'}>
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Background;
