import React from 'react';
import { Pressable, Switch } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';

import StyledText from './StyledText';
import Box from './Box';
import Icon from './Icon';

interface IActionButtonProps {
  label: string;
  info?: string;
  isToggle?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
  toggleValue?: boolean;
}

const ActionButton: React.FC<IActionButtonProps> = ({
  label,
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
    <Pressable
      android_ripple={{ radius: 300 }}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 46,
        paddingHorizontal: theme.spacing.m,
        backgroundColor: theme.colors.actionButton,
        borderRadius: theme.borderRadii.full,
      }}
      onPress={handlePress}
    >
      <StyledText variant="sublimeSemiBold" color="titleHeadline">
        {label}
      </StyledText>
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
          <StyledText variant="paragraph" color="titleHeadline" marginRight="s">
            {info}
          </StyledText>
          <Icon name="arrowRight" color={theme.colors.label} />
        </Box>
      )}
    </Pressable>
  );
};

export default ActionButton;
