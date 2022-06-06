import {Platform, StyleSheet} from 'react-native';
import {
  colors,
  family,
  HP,
  scrHeight,
  size,
  WP,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    padding: WP('5'),
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  imgStyle: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
  listStyle: {
    height: '82.5%',
  },
});

export default styles;
