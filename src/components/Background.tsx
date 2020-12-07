import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Box from './Box';

const Background: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="bgPrimary">
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Background;
