import React from 'react';
import { View } from 'react-native';
import {
  layout,
  spacing,
  border,
  backgroundColor,
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  OpacityProps,
  useRestyle,
} from '@shopify/restyle';

import { Theme } from 'theme';

import StyledPressable from '../StyledPressable';
import Box from '../Box';

import ButtonContainerStyle from './ButtonContainer.style';

const restyleFunctions = [layout, spacing, border, backgroundColor];

type IButtonContainerProps = LayoutProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme> & {
    onPress: () => void;
  };

const ButtonContainer: React.FC<IButtonContainerProps> = ({ onPress, children, ...rest }) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box overflow="hidden" borderRadius="full">
      <View style={ButtonContainerStyle.container}>
        <StyledPressable
          pressableProps={{
            onPress,
            android_ripple: { radius: 500 },
          }}
          flexDirection="row"
          alignItems="center"
          height={46}
          borderRadius="full"
          {...props}
        >
          {children}
        </StyledPressable>
      </View>
    </Box>
  );
};

export default ButtonContainer;
