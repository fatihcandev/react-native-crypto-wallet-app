import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';

import { ButtonContainer } from './ButtonContainer';
import Box from './Box';
import Icon from './Icon';
import StyledText from './StyledText';

interface IStyledButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'ghost' | 'positive' | 'negative';
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
        return 'primaryBlue';
      case 'secondary':
        return 'white';
      case 'ghost':
        return 'transparent';
      case 'positive':
        return 'success';
      case 'negative':
        return 'error';
      default:
        return 'primaryBlue';
    }
  };

  const getColor = () => {
    switch (variant) {
      case 'primary':
        return 'white';
      case 'positive':
        return 'white';
      case 'negative':
        return 'white';
      case 'secondary':
        return 'primaryBlue';
      case 'ghost':
        return 'primaryBlue';
      default:
        return 'white';
    }
  };

  return (
    <ButtonContainer
      {...{ onPress }}
      justifyContent="center"
      minWidth={200}
      backgroundColor={getBgColor()}
      borderWidth={variant === 'ghost' ? 1 : 0}
      borderColor="primaryBlue"
      opacity={disabled ? 0.5 : 1}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors[getColor()]} size="small" />
      ) : (
        <>
          {icon && (
            <Box marginRight="s">
              <Icon name={icon} color={getColor()} />
            </Box>
          )}
          <StyledText variant="sublimeSemiBold" color={getColor()}>
            {label}
          </StyledText>
        </>
      )}
    </ButtonContainer>
  );
};

export default StyledButton;
