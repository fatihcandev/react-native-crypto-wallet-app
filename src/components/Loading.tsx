import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import Box from './Box';

interface ILoadingProps {
  isFullScreen?: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ isFullScreen }) => {
  return (
    <Box
      style={StyleSheet.absoluteFill}
      backgroundColor={isFullScreen ? 'overlay' : 'transparent'}
      justifyContent="center"
      alignItems="center"
    >
      <ActivityIndicator color="#347AF0" size="large" />
    </Box>
  );
};

export default Loading;
