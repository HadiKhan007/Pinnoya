import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, family, size, WP} from '../../shared/exporter';

export const Button = ({
  btnText,
  bgColor,
  textColor,
  onPressBtn,
  width,
  img,
  marginLeft,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressBtn}>
      <LinearGradient
        colors={bgColor ? bgColor : colors.db_gradient}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={[
          styles.btnContainer,
          {
            width: width ? width : WP('90'),
            marginLeft: marginLeft ? marginLeft : 0,
          },
        ]}>
        {img && <Image source={img} style={styles.imageStyle} />}
        <Text
          style={[styles.btnText, {color: textColor ? textColor : colors.b1}]}>
          {btnText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: WP('14'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.box_shadow,
    flexDirection: 'row',
    marginVertical: WP('2'),
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4,
    elevation: 6,
  },
  imageStyle: {
    height: 23,
    width: 23,
    resizeMode: 'contain',
    right: 10,
  },
  btnText: {
    color: colors.white,
    fontFamily: family.Ubuntu_Medium,
    fontSize: size.xsmall,
  },
});
