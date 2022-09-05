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
  touchable: {
    height: WP(6),
    alignItems: 'baseline',
  },
  locationStyle: {
    height: 18,
    width: 11.5,
    position: 'absolute',
    marginHorizontal: WP('6.5'),
    marginVertical: WP('18'),
  },
  dotIcon: {
    height: 30,
    width: 1,
    marginHorizontal: WP('-2'),
    marginTop: WP('-1'),
  },
  checkedIcon: {
    height: 14,
    width: 14,
    position: 'absolute',
    marginHorizontal: WP('6.5'),
    marginTop: WP('4'),
  },
  cancelIcon: {
    height: 12,
    width: 12,
    position: 'absolute',
    marginHorizontal: WP('62'),
    marginVertical: WP('-5'),
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
    marginHorizontal: WP('62'),
    marginVertical: WP('9'),
  },
});

export default styles;
