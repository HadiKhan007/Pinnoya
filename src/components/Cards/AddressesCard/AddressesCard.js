import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {colors, family, size, WP, appIcons} from '../../../shared/exporter';
export const AdressesCard = ({item, width, icon}) => {
  return (
    <View style={[styles.container, {width: width ? WP(30) : width}]}>
      <View style={styles.leftContainer}>
        <Text style={styles.titleStyle}>{item?.title}</Text>
        <Text style={styles.subTitle}>{item?.subtitle}</Text>
      </View>
      {icon ? (
        <View style={styles.rightContainer}>
          <TouchableOpacity>
            <Image source={appIcons.added} style={styles.addCon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={appIcons.delete} style={styles.deleteCon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={appIcons.share} style={styles.shareCon} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.rightContainer, {paddingHorizontal: WP('3')}]}>
          <Image source={appIcons.added} style={styles.addCon2} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('20'),
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#00000050',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 3,
    elevation: Platform.OS == 'ios' ? 0 : 3,
    margin: 5,
    flexDirection: 'row',
  },
  leftContainer: {
    justifyContent: 'center',
    width: '80%',
    height: '100%',
    paddingHorizontal: WP('2'),
  },
  rightContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: size.xxxtiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
  addCon: {
    height: 15,
    width: 15,
    top: 5,
  },
  deleteCon: {
    height: 15,
    width: 15,
    tintColor: colors.b1,
  },
  shareCon: {
    height: 10,
    width: 10,
    bottom: 5,
  },
  addCon2: {
    height: 15,
    width: 15,
    left: 20,
  },
});
