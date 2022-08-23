import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCon: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 9999,
  },
});

export default styles;
