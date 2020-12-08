import React from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';
import { capitalizedCase, getTransactionStatusColor } from 'utils';

import Box from './Box';
import Icon from './Icon';
import StyledText from './StyledText';

interface ITransactionProps {
  status: 'withdrawn' | 'deposited' | 'sent';
  value: string;
  amount: string;
  date: string;
}

const Transaction: React.FC<ITransactionProps> = ({ status, value, amount, date }) => {
  const theme = useTheme<Theme>();
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      height={60}
      paddingHorizontal="m"
      backgroundColor="actionButton"
      borderRadius="full"
      elevation={2}
    >
      <Box flexDirection="row" alignItems="center">
        <Icon
          name={status}
          width="34"
          height="34"
          color={theme.colors[getTransactionStatusColor(status)]}
        />
        <Box marginLeft="m">
          <StyledText variant="label" color="titleHeadline">{`$${value}`}</StyledText>
          <StyledText variant="paragraph">{amount}</StyledText>
        </Box>
      </Box>
      <Box alignItems="flex-end">
        <StyledText variant="label" color={getTransactionStatusColor(status)}>
          {capitalizedCase(status)}
        </StyledText>
        <StyledText variant="paragraph">{date}</StyledText>
      </Box>
    </Box>
  );
};

export default Transaction;
