import React from 'react';
import { ActionButton, Background, Box } from 'components';

const Onboarding = () => {
  return (
    <Background>
      <Box flex={1} justifyContent="center" paddingHorizontal="l" backgroundColor="bgSecondary">
        <Box marginBottom="l">
          <ActionButton label="Title" icon="check" />
        </Box>
      </Box>
    </Background>
  );
};

export default Onboarding;
