import React from 'react';
import { BackgroundColorProps, ColorProps } from '@shopify/restyle';

import { Theme } from 'theme';

import Icon from './Icon';
import StyledPressable from './StyledPressable';

type IIconButtonProps = ColorProps<Theme> &
  BackgroundColorProps<Theme> & {
    icon: string;
    accessibilityLabel: string;
    onPress: () => void;
  };

const IconButton: React.FC<IIconButtonProps> = ({
  icon,
  color,
  backgroundColor,
  accessibilityLabel,
  onPress,
}) => {
  return (
    <StyledPressable
      {...{ onPress }}
      pressableProps={{
        android_ripple: { radius: 40, borderless: true },
        accessibilityLabel,
      }}
      width={49}
      height={49}
      backgroundColor={backgroundColor || 'transparent'}
      justifyContent="center"
      alignItems="center"
      borderRadius="m"
    >
      <Icon name={icon} {...{ color }} />
    </StyledPressable>
  );
};

export default IconButton;
