import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 0.08,
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
  },
  headerText: {
    fontSize: size.xxtiny,
    fontFamily: family.Ubuntu_Regular,
    color: colors.g1,
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('4'),
  },
  imgBg: {
    height: WP('70'),
    width: WP('65'),
    marginHorizontal: WP('16'),
  },
  h1: {
    fontSize: size.xxlarge,
    fontFamily: family.Ubuntu_Medium,
    color: colors.b1,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiRowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: WP(3),
  },
  rightIcon: {
    width: WP('20'),
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: WP('10'),
  },
  text: {
    fontWeight: 'bold',
    color: colors.b1,
    marginLeft: WP('2'),
  },
  title: {
    fontWeight: 'bold',
    color: colors.b1,
    fontSize: size.large,
    marginLeft: WP('3'),
    marginTop: WP('2'),
  },
  subtitle: {
    color: colors.g1,
    maxWidth: 250,
    marginLeft: WP('3'),
    marginTop: WP('1'),
  },
  iconContainer: {
    width: WP('20'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer2: {
    width: WP('76'),
  },
  sheetContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: WP('115'),
    width: WP('100'),
    overflow: 'hidden',
  },
  btnCon: {
    backgroundColor: colors.bl1,
    height: 15,
    width: 15,
    borderRadius: 12,
    marginHorizontal: WP('2'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer3: {
    alignItems: 'center',
  },
});
export default styles;
