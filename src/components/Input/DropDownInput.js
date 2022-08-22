import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../shared/exporter';
import DownArrow from 'react-native-vector-icons/AntDesign';

export const DropDownInput = ({title, onPress, width, icon}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {width: width}]}
      onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
      {icon ? null : <DownArrow name={'down'} size={14} color={colors.b1} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 47,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textStyle: {
    color: colors.b1,
    fontSize: size.normal,
    fontFamily: family.Ubuntu_Regular,
  },
});
