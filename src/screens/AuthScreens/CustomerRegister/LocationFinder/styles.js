import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowStyle: {
    position: 'absolute',
    top: 40,
    left: 15,
  },
  contentContainer: {
    width: WP('90'),
    backgroundColor: colors.white,
    position: 'absolute',
    top: 80,
    padding: WP('10'),
    marginHorizontal: WP('5'),
    borderRadius: 10,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 24,
    elevation: Platform.OS == 'ios' ? 0 : 12,
  },
  contentContainer2: {
    width: WP(69),
    height: WP(10),
    position: 'absolute',
    left: 70,
    top: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.g11,
  },
  touchable: {height: WP(6)},
  locationStyle: {
    height: 20,
    width: 13,
    top: 10,
    left: -4,
  },
  dotIcon: {height: 40, width: 1},
  checkedIcon: {
    height: 14,
    width: 14,
    position: 'absolute',
    top: 20,
    left: 35,
  },
  cancelIcon: {
    height: 12,
    width: 12,
    left: 260,
    bottom: 20,
  },
  pickupText: {
    fontFamily: family.Poppins_Regular,
    fontWeight: 'bold',
    fontSize: size.medium,
    color: colors.b1,
    top: -5,
  },
  dropText: {
    fontFamily: family.Poppins_Regular,
    fontWeight: 'bold',
    fontSize: size.medium,
    color: colors.b1,
    top: 30,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 24,
    elevation: Platform.OS == 'ios' ? 0 : 12,
  },
  swipeIcon: {
    height: 15,
    width: 15,
    left: 260,
    top: 10,
  },
});

export default styles;
