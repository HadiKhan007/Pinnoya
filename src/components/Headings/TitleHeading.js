import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';
import DownArrow from 'react-native-vector-icons/AntDesign';
export const TitleHeading = ({title, subtitle, icon, onPress}) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: icon ? 'row' : 'column',
          justifyContent: icon ? 'space-between' : null,
          alignItems: icon ? 'center' : null,
        },
      ]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity onPress={onPress}>
        {icon && <DownArrow name={'down'} size={14} color={colors.b1} />}
      </TouchableOpacity>
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
