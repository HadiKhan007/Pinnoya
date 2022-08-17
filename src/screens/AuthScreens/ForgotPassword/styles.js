import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('4'),
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: WP('5'),
  },
  secondContainer: {
    backgroundColor: colors.white2,
    alignItems: 'center',
    paddingVertical: WP('10'),
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
    paddingTop: WP('5'),
  },
  resTxt: {
    fontWeight: 'bold',
    color: colors.p1,
  },
  count:{
    width: WP(5),
    flexDirection: 'row',
  },
});

export default styles;
