import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appImages, WP} from '../../shared/exporter';

export const ImageBox = ({logo, id}) => {
  if (id == 0) {
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
  }
  if (id == 1) {
    return (
      <View style={styles.imageContainer2}>
        <Image source={logo} style={styles.imageStyle} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  imgBg: {
    height: WP('100'),
    width: WP('100'),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
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
  imageContainer2: {
    height: '70%',
    width: '90%',
    alignSelf: 'center',
    bottom: 22,
  },
});
