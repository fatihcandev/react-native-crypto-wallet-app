import { useCallback } from 'react';
import { Alert, AlertButton, AlertOptions } from 'react-native';

type AlertFunc = (
  title: string,
  message?: string,
  buttons?: AlertButton[],
  options?: AlertOptions,
) => void;

const useAlert = () => {
  const alertFunc: AlertFunc = useCallback((title, message, buttons, options) => {
    Alert.alert(title, message, buttons, options);
  }, []);

  return alertFunc;
};

export default useAlert;
