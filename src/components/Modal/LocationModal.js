import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors, family, size, spacing, WP} from '../../shared/exporter';
import {Button} from '..';

export const LocationModal = ({locationRef, title, subtitle, img, onPress}) => {
  return (
    <RBSheet
      ref={locationRef}
      height={WP('150')}
      openDuration={250}
      customStyles={{
        container: styles.container,
      }}>
      <Image style={styles.imageStyle} source={img} />
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subTitleStyle}>{subtitle}</Text>
      <View style={spacing.my6}>
        <Button
          onPressBtn={onPress}
          bgColor={colors.b_gradient}
          textColor={colors.white}
          btnText={'Set now'}
        />
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  imageStyle: {
    height: WP('90'),
    resizeMode: 'contain',
    width: WP('100'),
  },
  titleStyle: {
    textAlign: 'center',
    marginHorizontal: WP('4'),
    color: colors.b1,
    fontSize: size.h5,
    fontFamily: family.Ubuntu_Medium,
    marginVertical: 10,
  },
  subTitleStyle: {
    textAlign: 'center',
    paddingHorizontal: WP('5'),
    lineHeight: 21,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
});
