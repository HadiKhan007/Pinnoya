import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PlusIcon from 'react-native-vector-icons/Entypo';
import {colors, family, size, WP} from '../../shared/exporter';
export const SmallButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <PlusIcon name={'plus'} size={10} color={colors.white} />
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP('3.5'),
    backgroundColor: colors.p1,
    width: WP('30'),
    height: 30,
    borderRadius: 7,
  },
  textStyle: {
    color: colors.white,
    fontSize: size.tiny,
    fontFamily: family.Ubuntu_Medium,
  },
});
