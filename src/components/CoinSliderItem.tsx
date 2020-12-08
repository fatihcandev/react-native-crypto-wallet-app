import React from 'react';
import { capitalizedCase } from 'utils';

import Box from './Box';
import Icon from './Icon';
import StyledText from './StyledText';

interface ICoinSliderItemProps {
  coin: string;
}

const CoinSliderItem: React.FC<ICoinSliderItemProps> = ({ coin }) => {
  return (
    <Box
      maxWidth={170}
      height={46}
      flexDirection="row"
      alignItems="center"
      backgroundColor="actionButton"
      paddingHorizontal="s"
      borderRadius="full"
    >
      <Icon name={coin} width="28" height="28" />
      <StyledText variant="sublimeSemiBold" color="titleHeadline" marginLeft="l">
        {capitalizedCase(coin)}
      </StyledText>
    </Box>
  );
};

export default CoinSliderItem;
