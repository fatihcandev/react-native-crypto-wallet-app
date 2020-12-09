import React from 'react';
import { spacing, SpacingProps, useRestyle } from '@shopify/restyle';

import { Theme } from 'theme';

import Box from './Box';

type IIndicatorDotProps = {
  isActive: boolean;
} & SpacingProps<Theme>;

const IndicatorDot: React.FC<IIndicatorDotProps> = ({ isActive, ...rest }) => {
  const props = useRestyle([spacing], rest);
  return (
    <Box
      width={10}
      height={10}
      backgroundColor={isActive ? 'primaryBlue' : 'lightBlue'}
      borderRadius="full"
      {...props}
    />
  );
};

export default IndicatorDot;
