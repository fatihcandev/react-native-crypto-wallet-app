import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardDidShow = () => {
  const [keyboardDidShow, setKeyboardDidShow] = useState<boolean>(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _onKeyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _onKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _onKeyboardDidHide);
    };
  }, []);

  const _onKeyboardDidShow = () => {
    setKeyboardDidShow(true);
  };

  const _onKeyboardDidHide = () => {
    setKeyboardDidShow(false);
  };

  return keyboardDidShow;
};

export default useKeyboardDidShow;
