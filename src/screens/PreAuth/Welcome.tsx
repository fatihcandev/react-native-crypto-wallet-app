import React from 'react';

import { PreAuthScreens, StackNavigationProps } from 'types';
import { Background, Box, Illustration, StyledButton, StyledText, PressableText } from 'components';

const Welcome = ({ navigation }: StackNavigationProps<PreAuthScreens, 'Welcome'>) => {
  const handleNavigation = (route: 'Login' | 'SignUp') => {
    navigation.navigate(route);
  };

  return (
    <Background isBlue>
      <Box flex={1} alignItems="center">
        <Box marginTop="6xl" marginBottom="xl">
          <Illustration name="logo" />
        </Box>
        <Box alignItems="center">
          <StyledText variant="h3Regular" color="white" opacity={0.5}>
            Welcome to
          </StyledText>
          <StyledText variant="h1Light" color="white">
            WHOLLET
          </StyledText>
        </Box>
        <Box flex={1} justifyContent="flex-end" alignItems="center" paddingBottom="xl">
          <Box marginBottom="m">
            <StyledButton
              variant="secondary"
              label="Create account"
              onPress={() => handleNavigation('SignUp')}
            />
          </Box>
          <Box flexDirection="row" alignItems="center">
            <StyledText variant="paragraph" color="white" marginRight="s">
              Have an account?
            </StyledText>
            <PressableText variant="label" color="white" onPress={() => handleNavigation('Login')}>
              Login
            </PressableText>
          </Box>
        </Box>
      </Box>
    </Background>
  );
};

export default Welcome;
