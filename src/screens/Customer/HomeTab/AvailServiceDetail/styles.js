import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
  },
  btnCon: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default styles;
