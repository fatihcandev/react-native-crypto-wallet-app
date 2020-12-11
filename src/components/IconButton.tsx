import React from 'react';
import {
  backgroundColor,
  BackgroundColorProps,
  color,
  ColorProps,
  useRestyle,
} from '@shopify/restyle';

import { Theme } from 'theme';

import Icon from './Icon';
import StyledPressable from './StyledPressable';

type IIconButtonProps = ColorProps<Theme> &
  BackgroundColorProps<Theme> & {
    icon: string;
    accessibilityLabel: string;
    iconWidth?: string;
    iconHeight?: string;
    onPress: () => void;
  };

const IconButton: React.FC<IIconButtonProps> = ({
  icon,
  accessibilityLabel,
  iconWidth = '24',
  iconHeight = '24',
  onPress,
  ...rest
}) => {
  const restyleProps = useRestyle([color, backgroundColor], rest);
  return (
    <StyledPressable
      {...{ onPress }}
      pressableProps={{
        android_ripple: { radius: 40, borderless: true },
        accessibilityLabel,
      }}
      width={49}
      height={49}
      justifyContent="center"
      alignItems="center"
      borderRadius="m"
      {...restyleProps}
    >
      <Icon name={icon} {...restyleProps} width={iconWidth} height={iconHeight} />
    </StyledPressable>
  );
};

export default IconButton;
