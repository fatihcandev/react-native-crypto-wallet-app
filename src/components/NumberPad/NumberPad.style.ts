import { StyleSheet } from 'react-native';
import { spacing } from 'styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: spacing['6xlH'],
  },
  number: {
    paddingVertical: spacing.mV,
    paddingHorizontal: spacing.mH,
  },
  bottomSectionContainer: {
    marginTop: spacing['2xlV'],
  },
});
