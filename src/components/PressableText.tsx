import React from 'react';
import { Pressable } from 'react-native';
import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';

import { Theme } from 'theme';
import StyledText from './StyledText';

type IPressableTextProps = {
  onPress: () => void;
} & ColorProps<Theme> &
  TypographyProps<Theme> &
  VariantProps<Theme, 'textVariants'>;

const PressableText: React.FC<IPressableTextProps> = ({ onPress, children, ...rest }) => {
  const restyleProps = useRestyle([color, typography], rest);
  return (
    <Pressable android_ripple={{ radius: 500 }} {...{ onPress }}>
      <StyledText {...restyleProps}>{children}</StyledText>
    </Pressable>
  );
};

export default PressableText;
