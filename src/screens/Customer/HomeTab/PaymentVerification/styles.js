import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, family, HP, size, WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('4'),
    paddingVertical: WP('5'),
  },
  otpInputBox: {},
  otpInput: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    margin: HP('0.5'),
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: HP('2'),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.g2,
  },
  txtStyle: {
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.large,
    textAlign: 'center',
    color: colors.b8,
  },
  resTxt: {
    fontWeight: 'bold',
    color: colors.p1,
  },
});

export default styles;
