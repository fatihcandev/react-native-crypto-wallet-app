import React from 'react';

import Box from './Box';
import IndicatorDot from './IndicatorDot';

interface IIndicatorProps {
  index: number;
}

const Indicator: React.FC<IIndicatorProps> = ({ index }) => {
  return (
    <Box flexDirection="row" alignItems="center" alignSelf="flex-start">
      <IndicatorDot isActive={index === 1} marginRight="s" />
      <IndicatorDot isActive={index === 2} marginRight="s" />
      <IndicatorDot isActive={index === 3} marginRight="s" />
      <IndicatorDot isActive={index === 4} />
    </Box>
  );
};

export default Indicator;
