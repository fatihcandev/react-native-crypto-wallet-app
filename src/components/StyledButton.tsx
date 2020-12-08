import React from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';

import Box from './Box';
import Icon from './Icon';
import StyledText from './StyledText';

interface IStyledButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'ghost' | 'dotted' | 'positive' | 'negative';
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const StyledButton: React.FC<IStyledButtonProps> = ({
  label,
  variant,
  icon,
  loading,
  disabled,
  onPress,
}) => {
  const theme = useTheme<Theme>();
  const getBgColor = () => {
    switch (variant) {
      case 'primary':
        return 'buttonPrimary';
      case 'secondary':
        return 'buttonSecondary';
      case 'ghost':
        return 'transparent';
      case 'positive':
        return 'success';
      case 'negative':
        return 'error';
      default:
        return 'buttonPrimary';
    }
  };

  const getColor = () => {
    switch (variant) {
      case 'primary' || 'positive' || 'negative':
        return 'buttonPrimaryText';
      case 'secondary' || 'ghost':
        return 'buttonSecondaryText';
      default:
        return 'buttonPrimaryText';
    }
  };

  return (
    <Pressable
      {...{ onPress, disabled }}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 177,
        height: 46,
        paddingHorizontal: theme.spacing.buttonHorizontal,
        paddingVertical: theme.spacing.buttonVertical,
        backgroundColor: theme.colors[getBgColor()],
        borderWidth: variant === 'ghost' ? 1 : 0,
        borderColor: theme.colors.buttonPrimary,
        borderRadius: theme.borderRadii.full,
        opacity: disabled ? 0.5 : 1,
      }}
      android_ripple={{ radius: 100 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors[getColor()]} size="small" />
      ) : (
        <>
          {icon && (
            <Box marginRight="s">
              <Icon name={icon} color={theme.colors[getColor()]} />
            </Box>
          )}
          <StyledText variant="sublime" color={getColor()} fontFamily="TitilliumWeb-SemiBold">
            {label}
          </StyledText>
        </>
      )}
    </Pressable>
  );
};

export default StyledButton;
