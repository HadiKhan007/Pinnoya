import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, profile_uri, size} from '../../shared/exporter';

export const ProfileBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imgStyle} source={{uri: profile_uri}} />
      </View>
      <Text style={styles.h1Style}>Vivamus suscipit tortor</Text>
      <Text style={styles.h2Style}>
        Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    height: 145,
    width: 145,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  h1Style: {
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.b1,
    fontFamily: family.Ubuntu_Regular,
  },
  h2Style: {
    textAlign: 'center',
    color: colors.g1,
    width: '60%',
    fontFamily: family.Ubuntu_Light,
    fontSize: size.xxxtiny,
  },
});
