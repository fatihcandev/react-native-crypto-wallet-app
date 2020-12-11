import React from 'react';

import AuthBottomSection from './AuthBottomSection';
import Box from './Box';
import PressableText from './PressableText';
import StyledInput from './StyledInput';

interface IAuthFormProps {
  isSignUp?: boolean;
  name?: string;
  isNameValid?: boolean;
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
  onNameChange?: (name: string) => void;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onShowPasswordPress: () => void;
  onSignUpPress: () => void;
  onForgotPasswordPress?: () => void;
  onNavigationToLoginOrSignUp: () => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({
  isSignUp,
  name,
  isNameValid,
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
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onShowPasswordPress,
  onSignUpPress,
  onForgotPasswordPress,
  onNavigationToLoginOrSignUp,
}) => {
  return (
    <>
      {isSignUp && (
        <StyledInput
          label="Full Name"
          value={name!}
          onChangeText={onNameChange!}
          disabled={loading}
          errorText={isNameValid === undefined || isNameValid ? '' : 'Name is not valid'}
        />
      )}
      <StyledInput
        label="Email Address"
        value={email}
        onChangeText={onEmailChange}
        keyboardType="email-address"
        disabled={loading}
        errorText={isEmailValid === undefined || isEmailValid ? '' : 'Email address is not valid'}
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
      <Box marginTop="xl">
        <AuthBottomSection
          mainButtonVariant="primary"
          mainButtonLabel={submitButtonLabel}
          mainButtonLoading={loading}
          mainButtonDisabled={isButtonDisabled}
          lightTextLabel={bottomSectionLightTextLabel}
          accentTextLabel={bottomSectionAccentTextLabel}
          onMainButtonPress={onSignUpPress}
          onAccentTextPress={onNavigationToLoginOrSignUp}
        />
      </Box>
    </>
  );
};

export default AuthForm;
