import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { PreAuthScreens, StackNavigationProps } from 'types';
import { Background, Box, OnboardingSlider } from 'components';

const Onboarding = ({ navigation }: StackNavigationProps<PreAuthScreens, 'Onboarding'>) => {
  const { height } = Dimensions.get('window');

  const handleGetStartedPress = () => navigation.navigate('Welcome');

  return (
    <Background>
      <Box style={StyleSheet.absoluteFill} justifyContent="flex-end">
        <Box height={height * 0.54} backgroundColor="bgSecondary" borderRadius="l" />
      </Box>
      <OnboardingSlider onGetStartedPress={handleGetStartedPress} />
    </Background>
  );
};

export default Onboarding;
