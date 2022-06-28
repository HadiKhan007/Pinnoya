import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

export const TitleAlphaHeading = ({title, img, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.aiRow}>
        <Text style={styles.title}>{title}</Text>
        {img && <Image style={styles.imageStyle} source={img} />}
      </View>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: WP('2'),
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    lineHeight: 25,
    paddingRight: 10,
  },
  imageStyle: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
  subtitle: {
    color: colors.g1,
    fontSize: size.xsmall,
    fontFamily: family.Ubuntu_Regular,
  },
});
