import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 0.8,
    backgroundColor: colors.white,
  },

  secondContentContainer: {
    flex: 1,
    padding: WP('4'),
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  aiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    flexWrap: 'wrap',
  },
  aiCenter: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default styles;
