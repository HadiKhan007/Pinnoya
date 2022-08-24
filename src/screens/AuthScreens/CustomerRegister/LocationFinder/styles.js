import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  arrowStyle: {
    position: 'absolute',
    top: 45,
    left: 15,
  },
  contentContainer: {
    width: WP('90'),
    backgroundColor: colors.white,
    position: 'absolute',
    // top: 60,
    marginVertical: WP('25'),
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
    width: WP(70),
    height: WP(10),
    position: 'absolute',
    left: 60,
    top: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.g11,
  },
  touchable: {height: WP(6)},
  locationStyle: {
    height: 20,
    width: 13,
    position: 'absolute',
    top: 65,
    left: 22,
  },
  dotIcon: {height: 30, width: 1, top: -5, left: -8},
  checkedIcon: {
    height: 14,
    width: 14,
    position: 'absolute',
    top: 10,
    left: 22,
  },
  cancelIcon: {
    height: 12,
    width: 12,
    position: 'absolute',
    left: 225,
    bottom: 1,
  },
  pickupText: {
    fontFamily: family.Poppins_Regular,
    fontWeight: 'bold',
    fontSize: size.medium,
    color: colors.b1,
  },
  dropText: {
    fontFamily: family.Poppins_Regular,
    fontWeight: 'bold',
    fontSize: size.medium,
    color: colors.b1,
    position: 'absolute',
    top: 32,
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
    position: 'absolute',
    left: 220,
    top: 35,
  },
});

export default styles;
