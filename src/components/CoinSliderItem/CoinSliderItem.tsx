import React from 'react';
import { capitalizedCase } from 'utils';

import Box from '../Box';
import Icon from '../Icon';
import StyledText from '../StyledText';

import CoinSliderItemStyle from './CoinSliderItem.style';

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
      backgroundColor="lightBlue"
      borderRadius="full"
      style={CoinSliderItemStyle.container}
    >
      <Icon name={coin} width="28" height="28" />
      <StyledText
        variant="sublimeSemiBold"
        color="titleHeadline"
        style={CoinSliderItemStyle.coinLabel}
      >
        {capitalizedCase(coin)}
      </StyledText>
    </Box>
  );
};

export default CoinSliderItem;
