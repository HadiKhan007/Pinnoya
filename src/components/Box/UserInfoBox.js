import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, profile_uri, size, WP} from '../../shared/exporter';
import TickIcon from 'react-native-vector-icons/Feather';
import StarIcon from 'react-native-vector-icons/Ionicons';

export const UserInfoBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCon}>
        <View style={styles.imgContainer}>
          <Image source={{uri: profile_uri}} style={styles.imgStyle} />
        </View>
      </View>
      <View style={styles.cenCon}>
        <View style={styles.aiRow}>
          <Text style={styles.titleStyle}>Lorem ipsum</Text>
          <View style={styles.btnCon}>
            <TickIcon name="check" size={6} color={colors.white} />
          </View>
        </View>
        <Text style={styles.desc}>Lorem ipsum</Text>
      </View>
      <View style={styles.rightCon}>
        <View style={[styles.aiRow, styles.ratStyle]}>
          <Text style={styles.normal}>5.0</Text>
          <StarIcon name={'star'} color={colors.s1} size={18} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 10,
    shadowColor: colors.box_shadow,
    marginVertical: WP('5'),
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    padding: 20,
    height: 80,
  },
  imgContainer: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: colors.g1,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  leftCon: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cenCon: {
    width: '50%',
    justifyContent: 'center',
  },
  rightCon: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingBottom: 2,
  },
  desc: {
    fontSize: size.xsmall,
    fontFamily: family.Ubuntu_Regular,
    color: colors.g1,
  },
  normal: {
    fontSize: size.xsmall,
    color: colors.p1,
    fontFamily: family.Ubuntu_Bold,
    paddingRight: 5,
  },
  ratStyle: {
    backgroundColor: colors.g5,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});
