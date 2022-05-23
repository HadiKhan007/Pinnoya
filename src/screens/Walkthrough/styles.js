import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, WP} from '../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.default_color,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('3'),
    alignItems: 'center',
  },
});

export default styles;
