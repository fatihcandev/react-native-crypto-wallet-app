import { Dimensions, Platform, StatusBar } from 'react-native';
import isIPhoneX from './isIPhoneX';

const { width, height } = Dimensions.get('window');

const WIDTH_SCALE = 375;
const HEIGHT_SCALE = 667;
const standardLength = width > height ? width : height;
const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight!;
const deviceHeight =
  isIPhoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength;

const scaleSpacing = (size: number, type: 'vertical' | 'horizontal') => {
  const ratio =
    (size * (type === 'vertical' ? deviceHeight : width)) /
    (type === 'vertical' ? HEIGHT_SCALE : WIDTH_SCALE);
  const newScale = Math.round(ratio);
  return newScale;
};

export default scaleSpacing;
