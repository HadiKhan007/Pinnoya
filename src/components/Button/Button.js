import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, family, size, WP} from '../../shared/exporter';
import {AppLoader} from '../Modal/AppLoader';

export const Button = ({
  btnText,
  bgColor,
  textColor,
  onPressBtn,
  width,
  img,
  marginLeft,
  height,
  Loading,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressBtn}>
      {/* {Loading && <AppLoader loading={Loading} />} */}
      <LinearGradient
        colors={bgColor ? bgColor : colors.db_gradient}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={[
          styles.btnContainer,
          {
            height: height ? height : WP('14'),
            width: width ? width : WP('90'),
            marginLeft: marginLeft ? marginLeft : 0,
          },
        ]}>
        {img && <Image source={img} style={styles.imageStyle} />}
        {Loading ? (
          <ActivityIndicator animating color={colors.p2} />
        ) : (
          <Text
            style={[
              styles.btnText,
              {color: textColor ? textColor : colors.b1},
            ]}>
            {Loading} {btnText}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
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
    shadowRadius: 7,
    elevation: 6,
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    right: 10,
    // left: 1,
  },
  btnText: {
    color: colors.white,
    fontFamily: family.Ubuntu_Medium,
    fontSize: size.xsmall,
  },
});
