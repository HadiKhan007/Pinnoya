import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP, scrWidth} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  safeView: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 0.08,
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 0.2,
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
    zIndex: 9999,
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('4'),
  },
  firstCardContainer: {
    zIndex: 99999,
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    left: 20,
  },
  smbtnCon: {
    backgroundColor: colors.white,
    paddingHorizontal: WP('7'),
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: WP(2),
    marginLeft: WP(39),
    elevation: 5,
  },
  smText: {
    fontSize: size.tiny,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  dropImg: {
    height: 20,
    width: 10,
    marginTop: WP(4),
    marginLeft: WP(2),
  },
  rewTxt: {
    marginTop: WP(4),
    marginLeft: WP(3),
    color: colors.g1,
    fontWeight: 'bold',
    color: colors.b1,
  },
  srtxt: {
    marginTop: WP(4),
    color: colors.g1,
  },
  textContanier: {
    flexDirection: 'row',
  },
  insTxt: {
    fontSize: size.large,
    fontWeight: 'bold',
    marginTop: WP(15),
    color: colors.b1,
  },
  thirdContentContainer: {
    width: WP(80),
  },
  SerText: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  menuContainer: {
    width: '100%',
    position: 'relative',
  },
  menuStyle: {
    marginLeft: 12,
    borderRadius: 8,
    height: WP('20'),
    width: scrWidth / 3.7,
  },
  menuItemStyle: {
    height: WP('8'),
  },
  menuTxtStyle: {
    left: -2,
    color: colors.b1,
    marginTop: WP('3.5'),
    fontSize: size.xsmall,
  },
});

export default styles;
