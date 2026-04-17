import { StyleSheet } from 'react-native';
import { colors } from '../Themes/Colors';
import { moderateScale, verticalScale } from '../Themes/Metrics';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: moderateScale(14),
    borderColor: colors.grey,
    backgroundColor: colors.disable,
    paddingHorizontal: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
    marginVertical: verticalScale(12),
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
  },
});
