import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';

export const AuthFooter = ({onPress, title, subtitle}) => {
  return (
    <Text onPress={onPress} style={styles.footerText}>
      {title}
      <Text
        onPress={onPress}
        style={[
          styles.footerText,
          {color: colors.p1, fontFamily: family.Ubuntu_Bold},
        ]}>
        {subtitle}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  footerText: {
    textAlign: 'center',
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
    paddingTop: WP('5'),
    color: colors.b1,
  },
});
