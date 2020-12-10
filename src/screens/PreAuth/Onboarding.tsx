import React from 'react';
import { Dimensions } from 'react-native';

import { PreAuthScreens, StackNavigationProps } from 'types';
import { Background, ContentContainer, OnboardingSlider } from 'components';

const Onboarding = ({ navigation }: StackNavigationProps<PreAuthScreens, 'Onboarding'>) => {
  const { height } = Dimensions.get('window');

  const handleGetStartedPress = () => navigation.navigate('Welcome');

  return (
    <Background>
      <ContentContainer height={height * 0.54} />
      <OnboardingSlider onGetStartedPress={handleGetStartedPress} />
    </Background>
  );
};

export default Onboarding;
