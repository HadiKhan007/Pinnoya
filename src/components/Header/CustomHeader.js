import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors, family, profile_uri, size, WP} from '../../shared/exporter';
import MyStatusBar from '../Bar/MyStatusBar';
import BackArrow from 'react-native-vector-icons/AntDesign';
export const CustomHeader = ({
  onPressCall,
  onPressBack,
  backIcon,
  img,
  rightIcon,
  height,
}) => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.white} />
      <View style={[styles.container, {height: height}]}>
        <View style={styles.leftCon}>
          {backIcon && (
            <TouchableOpacity onPress={onPressBack} hitSlop={styles.hitSlop}>
              <BackArrow name={'left'} size={22} color={colors.b1} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.centerCon}>
          {img && (
            <View style={styles.imageCon}>
              <View style={styles.dotStyle} />
              <Image style={styles.imageStyle} source={img} />
            </View>
          )}
          <Text style={styles.h1}>Irene foks</Text>
          <Text style={styles.statusStyle}>Online</Text>
        </View>
        <View style={styles.rightCon}>
          {rightIcon && (
            <TouchableOpacity onPress={onPressCall} hitSlop={styles.hitSlop}>
              {rightIcon}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('35'),
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: WP('5'),
    justifyContent: 'space-between',
  },

  leftCon: {
    alignItems: 'center',
  },
  rightCon: {
    alignItems: 'center',
  },
  centerCon: {
    alignItems: 'center',
  },
  imageCon: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: colors.g3,
  },
  h1: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingVertical: 5,
    fontSize: size.xxlarge,
  },
  statusStyle: {
    color: colors.g4,
    fontSize: size.xsmall,
    fontFamily: family.Ubuntu_Light,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  dotStyle: {
    position: 'absolute',
    backgroundColor: colors.gr3,
    height: 7,
    width: 7,
    borderRadius: 7,
    right: 2,
    top: 2,
  },
  hitSlop: {
    top: 25,
    left: 25,
    bottom: 25,
    right: 25,
  },
});
