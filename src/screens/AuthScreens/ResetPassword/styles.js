import {Platform, StatusBar, StyleSheet} from 'react-native';
import {WP, size, family, colors} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('4'),
  },
  aiRow: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: WP('5'),
  },
});

export default styles;
