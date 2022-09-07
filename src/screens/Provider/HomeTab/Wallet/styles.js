import {StyleSheet} from 'react-native';
import {colors, WP, size, family} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    backgroundColor: colors.white,
    elevation: 10,
    borderRadius: WP('3'),
    padding: WP('4'),
    marginHorizontal: WP('5'),
    marginVertical: WP('2'),
  },
});
export default styles;
