import {StyleSheet} from 'react-native';
import {colors, WP, size, family, scrWidth} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: colors.white},
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
  },
  dropImg: {
    height: 20,
    width: 10,
    marginTop: WP(4),
    marginLeft: WP(2),
  },
  rewTxt: {
    marginTop: WP(4),
    marginLeft: WP(2),
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
    justifyContent: 'flex-end',
  },
  secondContentContainer: {
    width: WP(95),
  },
  menuContainer: {
    width: '100%',
    position: 'relative',
  },
  menuStyle: {
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
