import { ColorProps } from '@shopify/restyle';
import React from 'react';
import { Pressable } from 'react-native';
import { Theme } from 'theme';

import Box from './Box';
import Icon from './Icon';

type IIconButtonProps = ColorProps<Theme> & {
  icon: string;
  onPress: () => void;
};

const IconButton: React.FC<IIconButtonProps> = ({ icon, color, onPress }) => {
  return (
    <Pressable {...{ onPress }} android_ripple={{ radius: 30, borderless: true }}>
      <Box padding="s">
        <Icon name={icon} {...{ color }} />
      </Box>
    </Pressable>
  );
};

export default IconButton;
