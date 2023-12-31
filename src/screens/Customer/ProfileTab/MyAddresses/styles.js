import {StyleSheet} from 'react-native';
import {colors, WP, family, size} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingHorizontal: WP('5'),
    paddingVertical: WP('5'),
    backgroundColor: colors.white,
  },
  secondContainer: {flex: 1, padding: WP('5')},
  titleText: {
    fontSize: size.large,
    fontFamily: family.Ubuntu_Regular,
    color: colors.b1,
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: size.xxtiny,
    fontFamily: family.Ubuntu_Regular,
    color: colors.g1,
  },
  text: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.xxtitle,
  },
  aiCenter: {
    width: WP('95'),
    marginVertical: WP('5'),
  },
});
export default styles;
