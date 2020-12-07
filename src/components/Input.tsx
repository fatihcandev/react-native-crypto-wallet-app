import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  SpacingProps,
  BorderProps,
  ColorProps,
  color,
  TypographyProps,
  typography,
  LayoutProps,
  layout,
} from '@shopify/restyle';

import { Theme } from 'theme';

const restyleFunctions = [layout, spacing, border, color, typography];
type InputProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  ColorProps<Theme> &
  TypographyProps<Theme> &
  LayoutProps<Theme> &
  TextInputProps;

const Input = forwardRef<TextInput, InputProps>(({ ...rest }, ref) => {
  const props = useRestyle(restyleFunctions, rest);

  return <TextInput {...{ ref }} {...props} />;
});

export default Input;
