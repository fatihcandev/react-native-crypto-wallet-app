import React from 'react';

import Box from './Box';

interface IProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ value }) => {
  return (
    <Box width="100%" height={5} backgroundColor="disabled" borderRadius="full">
      <Box backgroundColor="primaryBlue" width={`${value}%`} height={5} borderRadius="full" />
    </Box>
  );
};

export default ProgressBar;
