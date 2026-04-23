import { StyleSheet } from 'react-native';
import { colors } from '../Themes/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../Themes/Metrics';

export const styles = StyleSheet.create({
  container: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(14),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
    marginVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(10),
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: colors.lightGrey,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    paddingVertical: verticalScale(10),
    fontSize: moderateScale(16),
    flex: 1,
    paddingRight: horizontalScale(4),
  },
  focusStyle: {
    backgroundColor: colors.white,
    borderColor: colors.focus,
  },
  blurStyle: {
    backgroundColor: colors.disable,
    borderColor: colors.grey,
  },
});
