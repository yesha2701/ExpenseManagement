import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../Themes/Metrics';
import { colors } from '../Themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    padding: moderateScale(15),
  },
  calenderView: {
    paddingTop: moderateScale(10),
    backgroundColor: colors.white,
    borderRadius: moderateScale(24),
  },
  prevStyle: {
    color: colors.primary,
  },
  nextStyle: {
    color: colors.primary,
  },
  TitleStyle: {
    fontWeight: '600',
    fontSize: moderateScale(16),
    letterSpacing: moderateScale(1),
  },
  formView: {
    marginVertical: verticalScale(10),
  },
  text: {
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(4),
    marginTop: verticalScale(5),
    color: colors.lightGrey,
    fontWeight: '600',
  },
  textInputStyle: {
    borderWidth: moderateScale(1),
    borderColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  dropdown: {
    borderWidth: moderateScale(2),
    padding: moderateScale(10),
    borderColor: colors.lightGrey,
    borderRadius: moderateScale(10),
    fontSize: moderateScale(16),
    backgroundColor: colors.white,
    marginVertical: verticalScale(6),
  },
  placeholderStyle: {
    color: colors.lightGrey,
  },
  errorText: {
    color: colors.red,
  },
});
