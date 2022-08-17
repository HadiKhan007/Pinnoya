import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../../shared/exporter';
import StarIcon from 'react-native-vector-icons/Ionicons';

export const SecondaryCard = ({width, img, title, subtitle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, {width: width ? width : WP('44')}]}>
      <Text style={styles.h1}>{title}</Text>
      <View style={styles.aiRow}>
        <Text style={styles.h2}>{subtitle}</Text>
        {img && <StarIcon name={'star'} color={colors.s1} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
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
  h1: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.tiny,
  },
  h2: {
    fontFamily: family.Ubuntu_Medium,
    color: colors.p1,
    fontSize: size.tiny,
    paddingRight: 2,
    textAlign: 'center',
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
});
