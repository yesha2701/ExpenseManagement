import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../Themes/Metrics';
import { colors } from '../Themes/Colors';

export const styles = StyleSheet.create({
  button: {
    bottom: verticalScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  linear: {
    borderRadius: moderateScale(35),
    shadowColor: colors.shadow,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  plusView: {
    padding: moderateScale(16),
  },
  plus: {
    height: verticalScale(32),
    width: horizontalScale(32),
  },
  icon: {
    marginTop: verticalScale(35),
  },
});
