import React from 'react';
import { Dimensions } from 'react-native';

import Box from './Box';
import Illustration from './Illustration';
import Indicator from './Indicator';
import StyledText from './StyledText';

interface IOnboardingSliderItemProps {
  header: string;
  description: string;
  illustration: string;
  index: number;
}

const OnboardingSliderItem: React.FC<IOnboardingSliderItemProps> = ({
  header,
  description,
  illustration,
  index,
}) => {
  const { width } = Dimensions.get('window');
  return (
    <Box flex={1} paddingTop="7xl" alignItems="center">
      <Box marginBottom="9xl">
        <Illustration name={illustration} width={`${width}`} height="240" />
      </Box>
      <Box marginBottom="xl">
        <Indicator type="slide" {...{ index }} />
      </Box>
      <Box maxWidth={327}>
        <StyledText variant="h1" textAlign="center">
          {header}
        </StyledText>
        <StyledText variant="paragraph" textAlign="center">
          {description}
        </StyledText>
      </Box>
    </Box>
  );
};

export default OnboardingSliderItem;
