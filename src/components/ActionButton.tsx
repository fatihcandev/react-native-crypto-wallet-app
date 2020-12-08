import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';

import ButtonContainer from './ButtonContainer';
import StyledText from './StyledText';
import Box from './Box';
import Icon from './Icon';

interface IActionButtonProps {
  label: string;
  icon?: string;
  info?: string;
  isToggle?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
  toggleValue?: boolean;
}

const ActionButton: React.FC<IActionButtonProps> = ({
  label,
  icon,
  info,
  isToggle = false,
  toggleValue,
  onPress,
  onToggle,
}) => {
  const theme = useTheme<Theme>();

  const handlePress = () => {
    if (isToggle && onToggle) {
      onToggle(!toggleValue);
    } else {
      onPress && onPress();
    }
  };

  return (
    <ButtonContainer
      onPress={handlePress}
      backgroundColor="actionButton"
      justifyContent="space-between"
    >
      <Box flexDirection="row" alignItems="center">
        {icon && <Icon name={icon} color="label" />}
        <StyledText variant="sublimeSemiBold" color="titleHeadline" marginLeft="s">
          {label}
        </StyledText>
      </Box>
      {isToggle && (
        <Switch
          onValueChange={onToggle}
          value={toggleValue}
          thumbColor="white"
          trackColor={{
            true: theme.colors.success,
            false: theme.colors.disabled,
          }}
        />
      )}
      {!isToggle && (
        <Box flexDirection="row" alignItems="center">
          {info && (
            <StyledText variant="paragraph" color="titleHeadline" marginRight="s">
              {info}
            </StyledText>
          )}
          <Icon name="arrowRight" color="label" />
        </Box>
      )}
    </ButtonContainer>
  );
};

export default ActionButton;
