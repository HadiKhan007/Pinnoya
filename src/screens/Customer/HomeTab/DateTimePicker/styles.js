import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.g5,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('4'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn: {
    width: WP(80),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: colors.g3,
    marginTop: WP(5),
  },
  cardContainer: {
    width: WP(80),
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
  },
  txt: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
    marginRight: WP(70),
    marginBottom: WP(5),
  },
  renderHeader: {
    width: '80%',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
