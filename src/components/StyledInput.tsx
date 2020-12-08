import React, { useState } from 'react';

import Box from './Box';
import IconButton from './IconButton';
import Input from './Input';
import StyledText from './StyledText';

interface IStyledInputProps {
  label: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  infoText?: string;
  errorText?: string;
  keyboardType?: 'default' | 'email-address' | 'phone-pad' | 'numeric';
  isPassword?: boolean;
  showPassword?: boolean;
  onChangeText: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onShowPasswordPress?: () => void;
}

const StyledInput: React.FC<IStyledInputProps> = ({
  label,
  placeholder,
  infoText,
  value,
  disabled,
  errorText,
  keyboardType = 'default',
  isPassword,
  showPassword,
  onChangeText,
  onFocus,
  onBlur,
  onShowPasswordPress,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur && onBlur();
  };

  const getBorderColor = () => {
    if (focused && errorText) {
      return 'error';
    } else if (focused && !errorText) {
      return 'inputActive';
    } else {
      return 'inputInactive';
    }
  };

  return (
    <Box position="relative">
      <StyledText variant="label">{label}</StyledText>
      <Input
        {...{ placeholder, value, onChangeText, keyboardType }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        color={disabled ? 'disabled' : 'paragraph'}
        borderBottomColor={getBorderColor()}
        borderBottomWidth={2}
        fontSize={19}
        fontFamily="TitilliumWeb-Regular"
        editable={!disabled}
        secureTextEntry={!showPassword}
      />
      <StyledText variant="fineprint" color={errorText ? 'error' : 'label'}>
        {errorText ? errorText : infoText}
      </StyledText>
      {isPassword && onShowPasswordPress && (
        <Box position="absolute" height="100%" right={0} bottom={0} justifyContent="center">
          <IconButton
            icon={showPassword ? 'eyeOff' : 'eye'}
            color={focused ? 'accent' : 'label'}
            onPress={onShowPasswordPress}
          />
        </Box>
      )}
    </Box>
  );
};

export default StyledInput;
