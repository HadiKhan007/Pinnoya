import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  subtitle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: WP('5'),
  },
});
export default styles;
