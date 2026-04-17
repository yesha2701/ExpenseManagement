import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../Themes/Metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
  },
  logoView: {
    marginTop: verticalScale(20),
    alignItems: 'center',
    rowGap: verticalScale(6),
    marginBottom: verticalScale(50),
  },
  logoImage: {
    margin: moderateScale(10),
  },
  logoText: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  loginBtn: {
    borderWidth: 2,
  },
});
