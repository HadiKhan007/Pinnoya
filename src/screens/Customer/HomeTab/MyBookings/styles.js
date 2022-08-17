import {Platform, StyleSheet} from 'react-native';
import {colors, WP, scrWidth, size} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('5'),
  },
  dropImg: {
    height: 20,
    width: 10,
    marginLeft: WP(3),
  },
  textContainer: {
    width: WP(30),
    marginHorizontal: WP(65),
    flexDirection: 'row',
  },
  alltxt: {
    left: 3,
    color: colors.b1,
    fontSize: size.small,
    fontWeight: 'bold',
  },
  sortTxt: {color: colors.g1, fontSize: size.small},
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
