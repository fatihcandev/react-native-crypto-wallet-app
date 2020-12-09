import React, { useState } from 'react';
import { Background, Box } from 'components';
import DialingCodeDropdown from 'components/DialingCodeDropdown';
import { ICountry } from 'types';

const Onboarding = () => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry>({
    name: 'azerbaijan',
    dialingCode: '+1',
  });

  const { name } = selectedCountry;

  return (
    <Background>
      <Box flex={1} justifyContent="center" paddingHorizontal="l" backgroundColor="bgSecondary">
        <DialingCodeDropdown selectedCountry={name} onPress={() => true} />
      </Box>
    </Background>
  );
};

export default Onboarding;
