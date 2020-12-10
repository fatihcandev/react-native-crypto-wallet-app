import React from 'react';
import { Pressable } from 'react-native';
import { TextProps } from '@shopify/restyle';

import { Theme } from 'theme';
import StyledText from './StyledText';

type IPressableTextProps = {
  onPress: () => void;
} & TextProps<Theme>;

const PressableText: React.FC<IPressableTextProps> = ({ onPress, children, ...textProps }) => {
  return (
    <Pressable android_ripple={{ radius: 500 }} {...{ onPress }}>
      <StyledText {...textProps}>{children}</StyledText>
    </Pressable>
  );
};

export default PressableText;
