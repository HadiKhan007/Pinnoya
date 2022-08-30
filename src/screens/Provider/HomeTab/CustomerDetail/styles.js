import {StyleSheet} from 'react-native';
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
  btnContainer: {
    flexDirection: 'row',
    padding: WP('2'),
    backgroundColor: colors.white,
    justifyContent: 'space-between',
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
  boxContainer: {
    width: '99%',
    backgroundColor: colors.white2,
    shadowColor: colors.box_shadow,
    margin: WP('5'),
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    padding: 20,
    height: 120,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: WP('5'),
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '15%',
    marginTop: 5,
  },
  smTitle: {
    fontSize: size.xxxtiny,
    color: colors.g1,
    marginVertical: 10,
  },
  title: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.xxtitle,
  },
});

export default styles;
