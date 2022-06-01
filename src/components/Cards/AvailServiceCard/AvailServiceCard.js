import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  appImages,
  colors,
  family,
  profile_uri,
  size,
  WP,
} from '../../../shared/exporter';
import TickIcon from 'react-native-vector-icons/Feather';
import StarIcon from 'react-native-vector-icons/Ionicons';

export const AvailServiceCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imgContainer}>
          <Image source={{uri: profile_uri}} style={styles.imgStyle} />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.aiRow}>
          <Text style={styles.titleStyle}>Lorem ipsum</Text>
          <View style={styles.btnCon}>
            <TickIcon name="check" size={6} color={colors.white} />
          </View>
        </View>
        <Text style={styles.smallTxt}>
          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
        </Text>
        <View style={styles.aiRow}>
          <Text style={styles.normal}>5.0</Text>
          <StarIcon name={'star'} color={colors.s1} size={14} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: WP('32'),
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  leftContainer: {
    width: '40%',
    height: '100%',
  },
  rightContainer: {
    width: '60%',
    justifyContent: 'center',
  },
  imgContainer: {
    height: 124,
    width: 124,
    borderRadius: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g1,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnCon: {
    backgroundColor: colors.bl1,
    height: 8,
    width: 8,
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingVertical: 5,
  },
  smallTxt: {
    fontSize: size.xxxtiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Light,
    paddingVertical: 5,
  },
  normal: {
    fontSize: size.xsmall,
    color: colors.p1,
    fontFamily: family.Ubuntu_Bold,
    paddingRight: 5,
  },
});
