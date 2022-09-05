import {StyleSheet} from 'react-native';
import {colors, WP, family, size} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnContainer: {
    width: WP('90'),
    height: WP('20'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p8,
    flexDirection: 'row',
    marginVertical: WP('3'),
    padding: WP('3'),
    marginHorizontal: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.p1,
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.xxlarge,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
  },
  contentContainer2: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white2,
    paddingHorizontal: WP('4'),
    marginVertical: WP('4'),
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '15%',
    marginTop: 7,
  },
  icon: {
    height: WP('4'),
    width: WP('4'),
  },
  text: {
    width: '85%',
    marginHorizontal: WP('2'),
    fontSize: size.xxtiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
  payments: {
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.normal,
    color: colors.b1,
    marginVertical: WP('4'),
  },
});
export default styles;
