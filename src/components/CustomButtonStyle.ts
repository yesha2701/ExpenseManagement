import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../Themes/Metrics';
import { colors } from '../Themes/Colors';

export const styles = StyleSheet.create({
  buttonView: {
    marginVertical: verticalScale(24),
  },
  linear: {
    borderRadius: moderateScale(14),
  },
  button: {
    alignItems: 'center',
    padding: moderateScale(15),
  },
  text: {
    color: colors.white,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});
