import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ContextProvider } from 'context';
import { DarkThemeProvider, NotificationHandler } from 'components';
import { RootNavigator } from 'navigation';

const App = () => {
  return (
    <ContextProvider>
      <DarkThemeProvider>
        <SafeAreaProvider>
          <RootNavigator />
          <NotificationHandler />
        </SafeAreaProvider>
      </DarkThemeProvider>
    </ContextProvider>
  );
};

export default App;
