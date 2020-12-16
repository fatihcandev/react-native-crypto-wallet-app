import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import { Easing, timing, useValue } from 'react-native-reanimated';

import { useKeyboardDidShow } from 'utils';

import { ContentContainer } from '../ContentContainer';
import { BottomSection } from '../BottomSection';
import Box from '../Box';
import PressableText from '../PressableText';
import StyledInput from '../StyledInput';

import AuthFormStyle from './AuthForm.style';

interface IAuthFormProps {
  isSignUp?: boolean;
  email: string;
  isEmailValid?: boolean;
  password: string;
  isPasswordValid?: boolean;
  loading: boolean;
  isButtonDisabled: boolean;
  showPassword: boolean;
  submitButtonLabel: string;
  bottomSectionLightTextLabel: string;
  bottomSectionAccentTextLabel: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onShowPasswordPress: () => void;
  onSignUpPress: () => void;
  onForgotPasswordPress?: () => void;
  onNavigationToLoginOrSignUp: () => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({
  isSignUp,
  email,
  isEmailValid,
  password,
  isPasswordValid,
  loading,
  isButtonDisabled,
  showPassword,
  submitButtonLabel,
  bottomSectionLightTextLabel,
  bottomSectionAccentTextLabel,
  onEmailChange,
  onPasswordChange,
  onShowPasswordPress,
  onSignUpPress,
  onForgotPasswordPress,
  onNavigationToLoginOrSignUp,
}) => {
  const keyboardDidShow = useKeyboardDidShow();
  const { height } = Dimensions.get('window');
  const UNFOCUSED_HEIGHT = (height * 57) / 100;
  const FOCUSED_HEIGHT = (height * 87) / 100;
  const containerInitialHeight = useValue(UNFOCUSED_HEIGHT);

  const containerAnimConfig = {
    duration: 200,
    easing: Easing.inOut(Easing.ease),
  };

  useEffect(() => {
    if (keyboardDidShow) {
      timing(containerInitialHeight, { ...containerAnimConfig, toValue: FOCUSED_HEIGHT }).start();
    } else {
      timing(containerInitialHeight, { ...containerAnimConfig, toValue: UNFOCUSED_HEIGHT }).start();
    }
  }, [
    FOCUSED_HEIGHT,
    UNFOCUSED_HEIGHT,
    containerAnimConfig,
    containerInitialHeight,
    keyboardDidShow,
  ]);

  return (
    <ContentContainer height={containerInitialHeight}>
      <StyledInput
        label="Email Address"
        value={email}
        onChangeText={onEmailChange}
        keyboardType="email-address"
        disabled={loading}
        errorText={isEmailValid === undefined || isEmailValid ? '' : 'Email address is not valid'}
        ariaLabel="email"
      />
      <StyledInput
        {...{ showPassword }}
        label="Password"
        value={password}
        onChangeText={onPasswordChange}
        onShowPasswordPress={onShowPasswordPress}
        disabled={loading}
        errorText={isPasswordValid === undefined || isPasswordValid ? '' : 'Password is not valid'}
        isPassword
        ariaLabel="password"
      />
      {!isSignUp && (
        <Box alignSelf="flex-end">
          <PressableText
            variant="link"
            label="Forgot your password?"
            onPress={onForgotPasswordPress!}
          />
        </Box>
      )}
      <View style={AuthFormStyle.bottomSection}>
        <BottomSection
          mainButtonVariant="primary"
          mainButtonLabel={submitButtonLabel}
          mainButtonLoading={loading}
          mainButtonDisabled={isButtonDisabled}
          lightTextLabel={bottomSectionLightTextLabel}
          accentTextLabel={bottomSectionAccentTextLabel}
          onMainButtonPress={onSignUpPress}
          onAccentTextPress={onNavigationToLoginOrSignUp}
        />
      </View>
    </ContentContainer>
  );
};

export default AuthForm;
