import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageBox} from '..';
import {colors, family, size, WP} from '../../shared/exporter';

export const IntroSlider = ({item}) => {
  return (
    <View>
      <ImageBox logo={item?.image} />
      <View style={styles.container}>
        <Text style={styles.h1}>{item?.title}</Text>
        <Text style={styles.h2}>{item?.title2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: WP('5'),
  },
  h1: {
    fontSize: size.h5,
    color: colors.b1,
    textAlign: 'center',
    // fontFamily: family.Ubuntu_Medium,
  },
  h2: {
    marginVertical: 10,
    color: colors.g1,
    textAlign: 'center',
    fontSize: size.xsmall,
    lineHeight: 22,
    // fontFamily: family.Ubuntu_Light,
  },
});
