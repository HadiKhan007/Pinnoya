import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size, spacing, WP} from '../../shared/exporter';

export const AuthFooter = ({onPress, title, subtitle}) => {
  return (
    <TouchableOpacity
      style={spacing.mt5}
      hitSlop={styles.hitSlop}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={styles.footerText}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footerText: {
    textAlign: 'center',
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
    color: colors.b1,
  },
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
});
