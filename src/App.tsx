import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
