import React from 'react';

import Box from './Box';
import IndicatorDot from './IndicatorDot';

interface IIndicatorProps {
  index?: number;
  pinLength?: number;
  type: 'pin' | 'slide';
}

const Indicator: React.FC<IIndicatorProps> = ({ index, pinLength, type }) => {
  const isSlide = type === 'slide';

  return (
    <Box flexDirection="row" alignItems="center">
      <IndicatorDot {...{ isSlide }} isActive={isSlide ? index === 1 : pinLength! > 0} />
      <IndicatorDot {...{ isSlide }} isActive={isSlide ? index === 2 : pinLength! > 1} />
      <IndicatorDot {...{ isSlide }} isActive={isSlide ? index === 3 : pinLength! > 2} />
      <IndicatorDot {...{ isSlide }} isActive={isSlide ? index === 4 : pinLength! > 3} />
    </Box>
  );
};

export default Indicator;
