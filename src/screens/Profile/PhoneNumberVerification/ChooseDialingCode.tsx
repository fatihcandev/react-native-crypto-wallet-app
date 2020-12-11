import React from 'react';

import { Background, StyledText } from 'components';

const ChooseDialingCode = () => {
  /*

const [selectedCountry, setSelectedCountry] = useState<ICountry>({
    name: 'unitedStates',
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


 */
  return (
    <Background>
      <StyledText variant="h1">ChooseDialingCode</StyledText>
    </Background>
  );
};

export default ChooseDialingCode;
