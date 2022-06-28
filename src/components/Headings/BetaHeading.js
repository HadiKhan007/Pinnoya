import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';

const BetaHeading = ({title, subtitle}) => {
  return (
    <View style={styles.aiRow}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default BetaHeading;

const styles = StyleSheet.create({
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WP('2'),
  },
  title: {
    fontSize: size.xsmall,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
    width: '50%',
  },
  subtitle: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
  },
});
