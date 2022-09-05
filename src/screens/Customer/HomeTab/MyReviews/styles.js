import {Platform, StyleSheet} from 'react-native';
import {colors, WP, size, scrWidth} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: colors.white},
  contentContainer: {
    flex: 0.2,
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    paddingHorizontal: WP('4'),
    borderTopLeftRadius: 24,
    borderRadius: 24,
    padding: WP('4'),
  },
  dropImg: {
    height: 13,
    width: 6,
    marginHorizontal: WP('3'),
  },
  textContainer: {
    width: WP('30'),
    marginHorizontal: WP('70'),
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
    height: WP('18'),
    width: scrWidth / 4.5,
    marginHorizontal: WP('-4'),
    marginVertical: WP('2'),
  },
  menuItemStyle: {
    height: WP('8'),
    alignItems: 'flex-end',
  },
  menuTxtStyle: {
    left: -50,
    color: colors.b1,
    fontSize: size.xsmall,
  },
});

export default styles;
