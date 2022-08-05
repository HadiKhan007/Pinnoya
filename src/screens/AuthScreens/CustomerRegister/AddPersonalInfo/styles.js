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
  },

  footerText: {
    textAlign: 'center',
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
    paddingTop: WP('5'),
  },
  buttonContainer: {
    width: '100%',
    marginVertical: WP('5'),
    alignItems: 'center',
  },
  aiFlexEnd: {
    alignItems: 'flex-end',
    width: '100%',
  },
  boxContainer: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 20,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 24,
    elevation: Platform.OS == 'ios' ? 0 : 12,
  },
});

export default styles;
