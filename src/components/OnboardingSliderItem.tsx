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
  const { width, height } = Dimensions.get('window');
  return (
    <Box flex={1} paddingTop="6xl" alignItems="center">
      <Box marginBottom="7xl">
        <Illustration name={illustration} width={`${width}`} height={`${(height * 29.55) / 100}`} />
      </Box>
      <Box marginBottom="xl">
        <Indicator type="slide" {...{ index }} />
      </Box>
      <Box maxWidth={width - 96}>
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
