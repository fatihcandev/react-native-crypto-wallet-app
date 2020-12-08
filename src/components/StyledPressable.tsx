import React from 'react';
import { Pressable, PressableProps } from 'react-native';
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
  SpacingProps,
  opacity,
} from '@shopify/restyle';

import { Theme } from 'theme';

const restyleFunctions = [layout, spacing, border, backgroundColor, opacity];

type StyledPressableProps = LayoutProps<Theme> &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme> & {
    pressableProps: PressableProps;
  };

const StyledPressable: React.FC<StyledPressableProps> = ({ children, pressableProps, ...rest }) => {
  const restyleProps = useRestyle(restyleFunctions, rest);

  return (
    <Pressable {...restyleProps} {...pressableProps}>
      {children}
    </Pressable>
  );
};

export default StyledPressable;
