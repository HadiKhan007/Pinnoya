import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  iconContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
    height: WP(80),
    width: WP(100),
    overflow: 'hidden',
  },
  firstContainer: {
    flex: 0.02,
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('5'),
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1Style: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  headText: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  checkStyle: {
    color: colors.g1,
    fontSize: size.tiny,
    fontFamily: family.Ubuntu_Regular,
  },
  aiCenter: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default styles;
