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
  label: string;
} & ColorProps<Theme> &
  TypographyProps<Theme> &
  VariantProps<Theme, 'textVariants'>;

const PressableText: React.FC<IPressableTextProps> = ({ onPress, label, ...rest }) => {
  const restyleProps = useRestyle([color, typography], rest);
  return (
    <Pressable android_ripple={{ radius: 500 }} {...{ onPress }} style={{ padding: 5 }}>
      <StyledText {...restyleProps}>{label}</StyledText>
    </Pressable>
  );
};

export default PressableText;
