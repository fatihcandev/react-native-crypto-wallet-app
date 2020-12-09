import { TransactionStatus } from 'types';

const getTransactionStatusColor = (status: string) => {
  switch (status) {
    case TransactionStatus.withdrawn:
      return 'error';
    case TransactionStatus.sent:
      return 'primaryBlue';
    case TransactionStatus.deposited:
      return 'success';
    default:
      return 'error';
  }
};

export default getTransactionStatusColor;
