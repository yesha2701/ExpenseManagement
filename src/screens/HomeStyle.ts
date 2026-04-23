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
    backgroundColor: colors.white,
  },
  listView: {
    padding: moderateScale(15),
  },
  entries: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    letterSpacing: moderateScale(1),
    paddingBottom: verticalScale(15),
  },
  flatListView: {
    flexDirection: 'row',
    padding: moderateScale(10),
    marginVertical: verticalScale(12),
    justifyContent: 'space-between',
  },
  leftFlatListView: {
    flexDirection: 'row',
  },
  iconView: {
    backgroundColor: colors.gray,
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
    marginRight: horizontalScale(14),
  },
  icon: {
    height: verticalScale(22),
    width: horizontalScale(24),
  },
  textView: {
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  dateText: {
    color: colors.darkGrey,
    fontSize: moderateScale(14),
    letterSpacing: moderateScale(1),
  },
  amountView: {
    flexDirection: 'row',
    columnGap: horizontalScale(10),
  },
});
