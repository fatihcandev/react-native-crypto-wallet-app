import React from 'react';
import { View } from 'react-native';

import Box from '../Box';
import PressableText from '../PressableText';
import StyledButton from '../StyledButton';
import StyledText from '../StyledText';

import BottomSectionStyle from './BottomSection.style';

interface IBottomSectionProps {
  mainButtonLabel: string;
  mainButtonLoading?: boolean;
  mainButtonDisabled?: boolean;
  mainButtonVariant: 'primary' | 'secondary';
  lightTextLabel?: string;
  accentTextLabel?: string;
  isWelcomePage?: boolean;
  onMainButtonPress: () => void;
  onAccentTextPress?: () => void;
}

const BottomSection: React.FC<IBottomSectionProps> = ({
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
    <View style={BottomSectionStyle.container}>
      <StyledButton
        variant={mainButtonVariant}
        label={mainButtonLabel}
        onPress={onMainButtonPress}
        loading={mainButtonLoading}
        disabled={mainButtonDisabled}
      />
      {lightTextLabel && accentTextLabel && onAccentTextPress && (
        <Box flexDirection="row" alignItems="center" style={BottomSectionStyle.textContainer}>
          <StyledText
            variant="paragraph"
            color={isWelcomePage ? 'white' : 'paragraph'}
            style={BottomSectionStyle.lightText}
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
      )}
    </View>
  );
};

export default BottomSection;
