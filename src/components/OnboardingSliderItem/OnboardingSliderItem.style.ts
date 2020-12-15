import { Dimensions, StyleSheet } from 'react-native';
import { spacing } from 'styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing['6xlV'],
    alignItems: 'center',
  },
  illustration: {
    marginBottom: spacing['7xlV'],
  },
  indicator: {
    marginBottom: spacing.xlV,
  },
  text: {
    maxWidth: width - 96,
  },
});
