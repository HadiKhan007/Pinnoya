import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
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
    marginLeft: WP(35),
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
    // marginTop: WP(10),
  },
  insTxt: {
    fontSize: size.large,
    fontWeight: 'bold',
    marginTop: WP(15),
    color: colors.b1,
  },
  thirdContentContainer: {
    // backgroundColor: 'red',
    width: WP(80),
    // height: WP(10),
  },
});

export default styles;
