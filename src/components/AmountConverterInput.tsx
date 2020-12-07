import React, { useState } from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';

import Box from './Box';
import Input from './Input';
import StyledText from './StyledText';
import IconButton from './IconButton';

interface IAmountConverterInputProps {
  value: number;
  currency: number;
  onChange: (amount: number) => void;
}

const AmountConverterInput: React.FC<IAmountConverterInputProps> = ({
  value,
  currency,
  onChange,
}) => {
  const theme = useTheme<Theme>();
  const [swapValues, setSwapValues] = useState<boolean>(false);

  const calculation = value * currency;

  return (
    <Box position="relative">
      <Box>
        <Input
          value={value > 0 ? (swapValues ? `${calculation}` : `${value}`) : ''}
          color="inputActive"
          textAlign="center"
          placeholder="0.00"
          fontFamily="TitilliumWeb-Bold"
          fontSize={36}
          maxLength={10}
          onChangeText={text => onChange(parseInt(text))}
          keyboardType="numeric"
        />
        <Box flexDirection="row" justifyContent="center" alignItems="center">
          <StyledText variant="sublime" color="label">
            {value && currency ? `$${swapValues ? value : calculation}` : '$0.00'}
          </StyledText>
        </Box>
      </Box>
      <Box position="absolute" height="100%" right={0} justifyContent="center">
        <IconButton
          icon="swap"
          color={theme.colors.accent}
          onPress={() => setSwapValues(s => !s)}
        />
      </Box>
    </Box>
  );
};

export default AmountConverterInput;
