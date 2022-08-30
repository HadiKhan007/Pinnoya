import {StyleSheet} from 'react-native';
import {colors, WP, family, size} from '../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 10,
  },
  contentContainer2: {
    flex: 1,
    padding: WP('5'),
  },
});
export default styles;
