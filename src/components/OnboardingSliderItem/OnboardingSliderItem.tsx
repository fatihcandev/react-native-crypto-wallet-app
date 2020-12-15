import React from 'react';
import { Dimensions, View } from 'react-native';

import Illustration from '../Illustration';
import Indicator from '../Indicator';
import StyledText from '../StyledText';

import OnboardingSliderItemStyle from './OnboardingSliderItem.style';

const { width, height } = Dimensions.get('window');

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
  return (
    <View style={OnboardingSliderItemStyle.container}>
      <View style={OnboardingSliderItemStyle.illustration}>
        <Illustration name={illustration} width={`${width}`} height={`${(height * 29.55) / 100}`} />
      </View>
      <View style={OnboardingSliderItemStyle.indicator}>
        <Indicator type="slide" {...{ index }} />
      </View>
      <View style={OnboardingSliderItemStyle.text}>
        <StyledText variant="h1" textAlign="center">
          {header}
        </StyledText>
        <StyledText variant="paragraph" textAlign="center">
          {description}
        </StyledText>
      </View>
    </View>
  );
};

export default OnboardingSliderItem;
