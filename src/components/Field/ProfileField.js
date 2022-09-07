import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';

export const ProfileField = ({img, title, text, item, iscolor}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.titleStyle, {color: iscolor ? iscolor : colors.b1}]}>
        {title}
      </Text>
      {img && <Image source={img} style={styles.imgStyle} />}
      {text && <Text style={styles.h1Style}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: colors.p1,
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Ubuntu_Regular,
  },
  h1Style: {
    fontSize: size.large,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
});
