import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 0.5,
    padding: WP('4'),
    backgroundColor: colors.white,
  },
  secondContentContainer: {
    flex: 1,
    padding: WP('4'),
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  h1: {
    fontSize: size.h1,
    textAlign: 'center',
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
  },
  btnCon: {
    shadowColor: colors.box_shadow,
    flexDirection: 'row',
    marginVertical: WP('5'),
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: colors.white,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    color: colors.p1,
    fontFamily: family.Ubuntu_Medium,
    fontSize: size.tiny,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WP('10'),
  },
});

export default styles;
