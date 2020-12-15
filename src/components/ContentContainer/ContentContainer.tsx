import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import AnimatedBox from '../AnimatedBox';
import Box from '../Box';

import ContentContainerStyle from './ContentContainer.style';

interface IContentContainerProps {
  height: Animated.Node<number> | number;
}

const ContentContainer: React.FC<IContentContainerProps> = ({ children, height }) => {
  return (
    <Box style={StyleSheet.absoluteFill} justifyContent="flex-end">
      <AnimatedBox
        backgroundColor="bgSecondary"
        borderRadius="l"
        {...{ height }}
        style={ContentContainerStyle.container}
      >
        {children}
      </AnimatedBox>
    </Box>
  );
};

export default ContentContainer;
