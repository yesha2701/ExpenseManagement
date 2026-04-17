import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../Themes/Metrics';
import { colors } from '../Themes/Colors';

export const styles = StyleSheet.create({
  headerView: {
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(10),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  arrowView: {
    borderWidth: 1,
    borderRadius: moderateScale(20),
    borderColor: colors.secondary,
  },
  arrowImg: {
    height: verticalScale(24),
    width: horizontalScale(24),
  },
  text: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    letterSpacing: moderateScale(2),
  },
  emptyView: {
    flex: 0.1,
  },
});
