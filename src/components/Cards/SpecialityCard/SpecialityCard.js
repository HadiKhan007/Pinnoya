import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../../shared/exporter';
import StarIcon from 'react-native-vector-icons/Ionicons';

export const SpecialityCard = ({width, subtitle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, {width: width ? width : WP('44')}]}>
      <Text style={styles.h2}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 32,
    backgroundColor: colors.white,
    shadowColor: colors.box_shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 8,
    marginVertical: 8,
  },

  h2: {
    fontFamily: family.Ubuntu_Medium,
    color: colors.p1,
    fontSize: size.tiny,
    paddingRight: 5,
  },
});
