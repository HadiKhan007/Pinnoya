import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../../shared/exporter';

export const ServiceCard = ({item, imgStyle, onPress, disabled}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.titleStyle}>{item?.title}</Text>
        <Text style={styles.subTitle}>{item?.subtitle}</Text>
      </View>
      <TouchableOpacity
        style={styles.rightContainer}
        onPress={onPress}
        disabled={disabled}>
        <Image style={imgStyle} source={item?.img} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('25'),
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
    justifyContent: 'center',
    width: '99%',
    borderRadius: 10,
    shadowColor: colors.box_shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 8,
    marginVertical: 8,
    flexDirection: 'row',
  },
  leftContainer: {
    justifyContent: 'center',
    width: '70%',
    height: '100%',
  },
  rightContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: size.xxxtiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
});
