import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../../shared/exporter';

export const ServiceTimeCard = ({width, subtitle, onPress, title}) => {
  return (
    <View onPress={onPress} style={[styles.btnContainer]}>
      <Text style={styles.h2}>{title}</Text>
      <Text style={[styles.h2, {fontSize: size.normal}]}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 2,
    paddingHorizontal: WP('2'),
    marginHorizontal: WP('2'),
  },

  h2: {
    fontFamily: family.Ubuntu_Medium,
    color: colors.p1,
    fontSize: size.tiny,
    paddingRight: 10,
  },
});
