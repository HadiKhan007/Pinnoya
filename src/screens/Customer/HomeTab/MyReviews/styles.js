import {Platform, StyleSheet} from 'react-native';
import {colors, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 0.2,
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    paddingHorizontal: WP('4'),
    borderTopLeftRadius: 24,
    borderRadius: 24,
    padding: WP('4'),
  },
});

export default styles;
