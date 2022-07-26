import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 0.1,
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
    zIndex: 9999,
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('4'),
  },
  firstCardContainer: {
    zIndex: 99999,
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    left: 20,
  },
});

export default styles;
