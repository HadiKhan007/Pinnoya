import {Platform, StyleSheet} from 'react-native';
import {colors, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
  },
});

export default styles;
