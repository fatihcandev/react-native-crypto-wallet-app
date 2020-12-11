import React from 'react';

import { PreAuthScreens, StackNavigationProps } from 'types';
import { Background, Box, Illustration, StyledText, AuthBottomSection } from 'components';

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
        <Box flex={1} justifyContent="flex-end">
          <AuthBottomSection
            mainButtonVariant="secondary"
            mainButtonLabel="Create account"
            lightTextLabel="Already have an account?"
            accentTextLabel="Login"
            onMainButtonPress={() => handleNavigation('SignUp')}
            onAccentTextPress={() => handleNavigation('Login')}
            isWelcomePage
          />
        </Box>
      </Box>
    </Background>
  );
};

export default Welcome;
