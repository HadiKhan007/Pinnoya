import {StyleSheet} from 'react-native';
import {colors, WP, size, family} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  safeView: {flex: 1},
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    padding: WP('2'),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('4'),
  },
  subtitle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingVertical: 10,
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  listContainer2: {
    flex: 2,
    marginHorizontal: 5,
  },
  imageStyle: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
  },
  allStyle: {
    // position: 'absolute',
    
    textAlign: 'right',
    color: colors.p1,
    fontSize: size.tiny,
  },
  allStyle2: {
    position: 'absolute',
    left: 335,
    top: 25,
    color: colors.p1,
  },
});
export default styles;
