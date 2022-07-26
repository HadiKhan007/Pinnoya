import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';

export const TitleHeading = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: WP('2'),
  },
  title: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    lineHeight: 25,
  },
  subtitle: {
    fontFamily: family.Ubuntu_Light,
    color: colors.g1,
    fontSize: size.tiny,
    lineHeight: 25,
  },
});
