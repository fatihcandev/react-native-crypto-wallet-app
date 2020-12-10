import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import AnimatedBox from './AnimatedBox';
import Box from './Box';

interface IContentContainerProps {
  height: Animated.Node<number> | number;
}

const ContentContainer: React.FC<IContentContainerProps> = ({ children, height }) => {
  return (
    <Box style={StyleSheet.absoluteFill} justifyContent="flex-end">
      <AnimatedBox padding="l" backgroundColor="bgSecondary" borderRadius="l" {...{ height }}>
        {children}
      </AnimatedBox>
    </Box>
  );
};

export default ContentContainer;
