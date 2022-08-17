import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {appIcons, colors} from '../../../shared/exporter';

export const UploadPicCard = ({width}) => {
  return (
    <ImageBackground style={[styles.leftCon, {width: width ? width : '100%'}]}>
      <TouchableOpacity style={styles.btnContainer} hitSlop={styles.hitSlop}>
        <Image style={styles.smIcon} source={appIcons.zoom} />
      </TouchableOpacity>
      <Image style={styles.imageStyle} source={appIcons.photo} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  leftCon: {
    backgroundColor: colors.g3,
    borderRadius: 10,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  smIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
  },
  btnContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  hitSlop: {
    top: 15,
    bottom: 15,
    left: 15,
    right: 15,
  },
  rightCon: {
    width: '65%',
    paddingHorizontal: 10,
  },
});
