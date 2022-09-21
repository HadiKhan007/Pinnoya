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
  },
  styleDropdownMenu: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingLeft: WP('5'),
  },
  styleMainWrapper: {
    borderRadius: 10,
    marginTop: 5,
  },
});

export default styles;
