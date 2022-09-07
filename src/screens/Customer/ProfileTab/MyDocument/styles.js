import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    backgroundColor: colors.white,
    elevation: 10,
    borderRadius: WP('3'),
    padding: WP('4'),
    marginHorizontal: WP('5'),
    marginVertical: WP('2'),
  },
  picContainer: {
    padding: WP('2'),
    marginHorizontal: WP('3'),
  },
  picContainer2: {
    padding: WP('3'),
    marginHorizontal: WP('1'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});
export default styles;
