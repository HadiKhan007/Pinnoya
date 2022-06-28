import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, family, size, WP} from '../../shared/exporter';

export const PrimaryButton = ({
  btnText1,
  btnText2,
  bgColor,
  textColor,
  onPressBtn,
  width,
  img,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressBtn}>
      <LinearGradient
        colors={bgColor ? bgColor : colors.db_gradient}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={[styles.btnContainer, {width: width ? width : WP('90')}]}>
        <Text
          style={[styles.btnText, {color: textColor ? textColor : colors.b1}]}>
          {btnText1}
        </Text>
        <Text
          style={[
            styles.btnText,
            {
              color: textColor ? textColor : colors.b1,
              fontFamily: family.Ubuntu_Medium,
              fontSize: size.xsmall,
            },
          ]}>
          {btnText2}
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
    marginVertical: WP('2'),
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  btnText: {
    color: colors.white,
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
    lineHeight: 18,
  },
});
