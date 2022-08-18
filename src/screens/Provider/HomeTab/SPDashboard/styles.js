import {StyleSheet} from 'react-native';
import {colors,WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  safeView: {flex: 1},
  btnContainer: {
    flexDirection: 'row',
    padding: WP('2'),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
});
export default styles;
