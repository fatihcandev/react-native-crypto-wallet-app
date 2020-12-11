import React from 'react';

import Box from './Box';
import PressableText from './PressableText';
import StyledButton from './StyledButton';
import StyledText from './StyledText';

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
    <Box alignItems="center" paddingBottom="xl">
      <StyledButton
        variant={mainButtonVariant}
        label={mainButtonLabel}
        onPress={onMainButtonPress}
        loading={mainButtonLoading}
        disabled={mainButtonDisabled}
      />
      <Box flexDirection="row" alignItems="center" marginTop="m">
        <StyledText
          variant="paragraph"
          color={isWelcomePage ? 'white' : 'paragraph'}
          marginRight="s"
        >
          {lightTextLabel}
        </StyledText>
        <PressableText
          variant="label"
          color={isWelcomePage ? 'white' : 'accent'}
          onPress={onAccentTextPress}
        >
          {accentTextLabel}
        </PressableText>
      </Box>
    </Box>
  );
};

export default AuthBottomSection;
