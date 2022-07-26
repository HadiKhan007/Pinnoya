import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    padding: WP('4'),
  },
  titleStyle: {
    color: colors.g1,
    fontSize: size.xsmall,
    fontFamily: family.Ubuntu_Light,
    lineHeight: 18,
    paddingHorizontal: 5,
  },
});

export default styles;
