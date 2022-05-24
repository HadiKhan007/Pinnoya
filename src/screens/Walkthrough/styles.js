import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, WP} from '../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('3'),
    alignItems: 'center',
  },
  secondContainer: {
    flex: 0.25,
    backgroundColor: colors.white2,
    alignItems: 'center',
    paddingVertical: WP('10'),
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
});

export default styles;
