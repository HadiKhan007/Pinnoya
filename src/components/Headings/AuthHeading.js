import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

export const AuthHeading = ({
  title,
  subtitle,
  maxWidth,
  marginLeft,
  width,
  margin,
  numberOfLines,
  flexDirection,
  icon,
}) => {
  return (
    <View
      style={[
        styles.container,
        {flexDirection: flexDirection ? 'row' : 'column'},
      ]}>
      {icon && (
        <TouchableOpacity>
          <Image
            source={appIcons.plus}
            style={{
              height: 14,
              width: 14,
              marginVertical: WP('1'),
            }}
          />
        </TouchableOpacity>
      )}
      <Text
        style={[styles.title, {maxWidth: maxWidth}, {marginLeft: marginLeft}]}>
        {title}
      </Text>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.subtitle, {maxWidth: width}, {marginLeft: margin}]}>
        {subtitle}
      </Text>
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
