import {Platform, StyleSheet} from 'react-native';
import {colors, family, size} from '../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: size.h1,
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
  },
});

export default styles;
