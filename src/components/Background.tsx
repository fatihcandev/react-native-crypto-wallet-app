import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';
import { AppContext } from 'context';

import Box from './Box';

const Background: React.FC = ({ children }) => {
  const { state } = useContext(AppContext);
  const theme = useTheme<Theme>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme.colors.bgPrimary}
        barStyle={state.darkMode ? 'light-content' : 'dark-content'}
      />
      <Box flex={1} backgroundColor="bgPrimary">
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Background;
