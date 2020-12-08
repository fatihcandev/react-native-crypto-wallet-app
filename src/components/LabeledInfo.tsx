import React from 'react';
import { getCoinSymbol } from 'utils';

import Box from './Box';
import StyledText from './StyledText';

interface ILabeledInfoProps {
  label: string;
  amount: string;
  coin: string;
}

const LabeledInfo: React.FC<ILabeledInfoProps> = ({ label, amount, coin }) => {
  return (
    <Box>
      <StyledText variant="label">{label}</StyledText>
      <StyledText variant="sublimeSemiBold" color="titleHeadline">
        {amount} {getCoinSymbol(coin)}
      </StyledText>
    </Box>
  );
};

export default LabeledInfo;
