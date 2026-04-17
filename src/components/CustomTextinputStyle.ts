import { StyleSheet } from 'react-native';
import { colors } from '../Themes/Colors';
import { verticalScale } from '../Themes/Metrics';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: verticalScale(12),
  },
  label: {
    fontSize: 16,
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
  },
});
