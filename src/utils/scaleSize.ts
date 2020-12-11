import { Dimensions, Platform, StatusBar } from 'react-native';

import isIPhoneX from './isIPhoneX';

const { height, width } = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight!;

const deviceHeight =
  isIPhoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength;

const scaleSize = (size: number, standardScreenHeight?: number) => {
  const heightPercent = (size * deviceHeight) / (standardScreenHeight || 680);
  return Math.round(heightPercent);
};

export default scaleSize;
