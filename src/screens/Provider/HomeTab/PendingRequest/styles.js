import {StyleSheet} from 'react-native';
import {colors, WP, size, family} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  safeView: {flex: 1},
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    padding: WP('2'),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('4'),
  },
  subtitle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingVertical: 10,
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  allStyle: {
    left: 285,
    top: -28,
    color: colors.p1,
    fontSize: size.tiny,
  },
});
export default styles;
