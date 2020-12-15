import React from 'react';
import { View } from 'react-native';

import Box from '../Box';
import PressableText from '../PressableText';
import StyledButton from '../StyledButton';
import StyledText from '../StyledText';

import AuthBottomSectionStyle from './AuthBottomSection.style';

interface IAuthBottomSectionProps {
  mainButtonLabel: string;
  mainButtonLoading?: boolean;
  mainButtonDisabled?: boolean;
  mainButtonVariant: 'primary' | 'secondary';
  lightTextLabel: string;
  accentTextLabel: string;
  isWelcomePage?: boolean;
  onMainButtonPress: () => void;
  onAccentTextPress: () => void;
}

const AuthBottomSection: React.FC<IAuthBottomSectionProps> = ({
  mainButtonVariant,
  mainButtonLabel,
  mainButtonLoading,
  mainButtonDisabled,
  lightTextLabel,
  accentTextLabel,
  isWelcomePage,
  onMainButtonPress,
  onAccentTextPress,
}) => {
  return (
    <View style={AuthBottomSectionStyle.container}>
      <StyledButton
        variant={mainButtonVariant}
        label={mainButtonLabel}
        onPress={onMainButtonPress}
        loading={mainButtonLoading}
        disabled={mainButtonDisabled}
      />
      <Box flexDirection="row" alignItems="center" style={AuthBottomSectionStyle.textContainer}>
        <StyledText
          variant="paragraph"
          color={isWelcomePage ? 'white' : 'paragraph'}
          style={AuthBottomSectionStyle.lightText}
        >
          {lightTextLabel}
        </StyledText>
        <PressableText
          variant="label"
          color={isWelcomePage ? 'white' : 'accent'}
          onPress={onAccentTextPress}
          label={accentTextLabel}
        />
      </Box>
    </View>
  );
};

export default AuthBottomSection;
