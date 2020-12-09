import React from 'react';

import IconButton from './IconButton';

interface ICoinActionButtonProps {
  type: 'deposit' | 'withdraw' | 'send' | 'exchange';
  onPress: () => void;
}

const CoinActionButton: React.FC<ICoinActionButtonProps> = ({ type, onPress }) => {
  return (
    <IconButton
      icon={type}
      color="midnightBlue"
      accessibilityLabel={type}
      backgroundColor="lightBlue"
      {...{ onPress }}
    />
  );
};

export default CoinActionButton;
