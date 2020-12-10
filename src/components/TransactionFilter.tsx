import React from 'react';

import Box from './Box';
import ButtonContainer from './ButtonContainer';
import Icon from './Icon';
import StyledText from './StyledText';

interface ITransactionFilterProps {
  type: 'transactionType' | 'coin' | 'date';
  filterAmount: number;
  onPress: () => void;
}

const TransactionFilter: React.FC<ITransactionFilterProps> = ({ type, filterAmount, onPress }) => {
  const isSelected = filterAmount > 0;

  const getFilterText = () => {
    switch (type) {
      case 'transactionType':
        return 'Transaction type';
      case 'coin':
        return 'Coin';
      case 'date':
        return 'Date';
      default:
        return 'Transaction type';
    }
  };

  return (
    <ButtonContainer
      justifyContent="space-between"
      height={35}
      backgroundColor={isSelected ? 'primaryBlue' : 'lightBlue'}
      alignSelf="flex-start"
      {...{ onPress }}
    >
      <StyledText variant="paragraph" color={isSelected ? 'white' : 'paragraph'} marginRight="s">
        {getFilterText()}
      </StyledText>
      {isSelected && (
        <Box
          width={18}
          height={18}
          justifyContent="center"
          alignItems="center"
          marginRight="s"
          backgroundColor="white"
          borderRadius="full"
        >
          <StyledText variant="fineprint" color="accent">
            {filterAmount}
          </StyledText>
        </Box>
      )}
      <Icon name="chevronDown" color={isSelected ? 'white' : 'paragraph'} />
    </ButtonContainer>
  );
};

export default TransactionFilter;
