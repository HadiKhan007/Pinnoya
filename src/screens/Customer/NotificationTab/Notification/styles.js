import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 10,
  },
});

export default styles;
