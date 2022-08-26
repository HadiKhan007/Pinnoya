import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('4'),
    paddingVertical: WP('7'),
  },
  pana:{
    height: 320,
    width: 330,
    top: 5,
  },
});

export default styles;
