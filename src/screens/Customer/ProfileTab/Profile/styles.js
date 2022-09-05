import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: WP('5'),
  },
  flex1: {
    flex: 1,
  },
  logStyle: {
    fontFamily: family.Poppins_Bold,
    fontSize: size.xxlarge,
    color: colors.p1,
    marginVertical: WP('3'),
    marginVertical: WP('2'),
  },
});

export default styles;
