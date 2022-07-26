import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appImages, WP} from '../../shared/exporter';

export const BgImageBox = ({logo}) => {
  return (
    <ImageBackground
      style={styles.imgBg}
      resizeMode={'contain'}
      imageStyle={{zIndex: 99999}}
      source={appImages.welcomeBg}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.imageStyle} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    height: WP('100'),
    width: WP('100'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  imageContainer: {
    height: '70%',
    width: '70%',
    alignSelf: 'center',
    bottom: 22,
  },
});
