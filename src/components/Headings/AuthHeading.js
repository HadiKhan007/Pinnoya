import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';

export const AuthHeading = ({title, subtitle, maxWidth, marginLeft}) => {
  return (
    <View style={[styles.container]}>
      <Text
        style={[styles.title, {maxWidth: maxWidth}, {marginLeft: marginLeft}]}>
        {title}
      </Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: WP('5'),
    paddingTop: WP('5'),
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
    lineHeight: 25,
  },
  subtitle: {
    fontFamily: family.Ubuntu_Light,
    color: colors.g1,
    fontSize: size.tiny,
    lineHeight: 25,
  },
});
