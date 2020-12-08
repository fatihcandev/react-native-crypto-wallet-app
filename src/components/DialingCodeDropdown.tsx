import React from 'react';
import { getCountryName } from 'utils';

import Box from './Box';
import ButtonContainer from './ButtonContainer';
import Icon from './Icon';
import StyledText from './StyledText';

interface IDialingCodeDropdownProps {
  selectedCountry: string;
  onPress: () => void;
}

const DialingCodeDropdown: React.FC<IDialingCodeDropdownProps> = ({ selectedCountry, onPress }) => {
  return (
    <ButtonContainer {...{ onPress }} justifyContent="space-between" backgroundColor="actionButton">
      <Box flexDirection="row" alignItems="center">
        <Icon name={selectedCountry} width="26" height="26" />
        <StyledText variant="sublimeSemiBold" color="titleHeadline" marginLeft="m">
          {getCountryName(selectedCountry)}
        </StyledText>
      </Box>
      <Icon name="chevronDown" color="titleHeadline" />
    </ButtonContainer>
  );
};

export default DialingCodeDropdown;
