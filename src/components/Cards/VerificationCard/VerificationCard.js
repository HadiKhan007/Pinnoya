import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../../shared/exporter';
import TickIcon from 'react-native-vector-icons/Feather';

export const VerificationCard = ({width, subtitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnContainer]}>
      <Text style={styles.h2}>{subtitle}</Text>
      <TickIcon name="check" size={12} color={colors.gr1} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 29,
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
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },

  h2: {
    fontFamily: family.Ubuntu_Medium,
    color: colors.b1,
    fontSize: size.xxtiny,
    paddingRight: 10,
  },
});
