import { StyleSheet } from 'react-native';
import { moderateScale } from '../Themes/Metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    // backgroundColor: 'yellow',
    padding: moderateScale(15),
  },
  entries: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    letterSpacing: moderateScale(1),
  },
});
