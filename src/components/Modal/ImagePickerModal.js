import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {colors, WP, family, appIcons, appImages} from '../../shared/exporter';
import ImageCropPicker from 'react-native-image-crop-picker';
import PropTypes from 'prop-types';

export const ImagePickerModal = ({
  show,
  onPressHide,
  onPressGallery,
  onPressCamera,
}) => {
  return (
    <View style={styles.container}>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onPressCamera} style={styles.btn}>
          <View style={styles.leftContainer}>
              <Image source={appImages.Camera} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.btnText}>Take Image from Camera</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={onPressGallery} style={styles.btn}>

          <View style={styles.leftContainer}>
              <Image source={appImages.Gallery} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.btnText}>Pick Image from Gallery</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
ImagePickerModal.propTypes = {
  show: PropTypes.bool,
  onPressHide: PropTypes.func,
  onPressGallery: PropTypes.func,
  onPressCamera: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: colors.b1,
    width: '100%',
  },
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: WP('5'),
  },
  btnText: {
    fontSize: WP('4'),
    fontWeight: '700',
    color: colors.b1,
    paddingVertical: WP('1'),
    textAlign: 'left',
  },
  imageStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: colors.b1,
  },
  textContainer: {
    width: '85%',
  },
  leftContainer: {
    width: '15%',
    paddingVertical: WP('3'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});