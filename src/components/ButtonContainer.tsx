import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';
import Box from './Box';

interface IButtonContainerProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const ButtonContainer: React.FC<IButtonContainerProps> = ({ style, onPress, children }) => {
  const theme = useTheme<Theme>();

  return (
    <Box overflow="hidden" borderRadius="full">
      <Pressable
        android_ripple={{ radius: 500 }}
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            height: 46,
            paddingHorizontal: theme.spacing.m,
          },
          style,
        ]}
        {...{ onPress }}
      >
        {children}
      </Pressable>
    </Box>
  );
};

export default ButtonContainer;
