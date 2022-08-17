import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from '../../components';
import {colors, family, size, WP} from '../../shared/exporter';

export const ServiceModal = ({
  onPressHide,
  show,
  onPressBack,
  img,
  maxHeight,
  title,
  image,
  backBtn,
}) => {
  return (
    <View>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={[styles.modalContainer]}>
          {image && <Image source={img} style={styles.img} />}
          {title ? (
            <Text style={[styles.titleStyle, {maxHeight: maxHeight}]}>
              your service successfully submitting
            </Text>
          ) : (
            <Text style={[styles.titleStyle, {maxHeight: maxHeight}]}>
              Thank you for submitting
            </Text>
          )}
          <Text style={styles.subtitleStyle}>
            We will contact you within 24h for the service.
          </Text>
          {backBtn ? (
            <Button
              onPressBtn={onPressBack}
              btnText={'Ok'}
              bgColor={colors.b_gradient}
              width={WP('80')}
              textColor={colors.white}
            />
          ) : (
            <Button
              onPressBtn={onPressBack}
              btnText={'Back'}
              bgColor={colors.b_gradient}
              width={WP('80')}
              textColor={colors.white}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: WP('7'),
    borderRadius: 30,
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.p1,
    fontFamily: family.Ubuntu_Medium,
  },
  subtitleStyle: {
    fontSize: size.xsmall,
    color: colors.b1,
    marginVertical: WP('5'),
    marginHorizontal: WP('10'),
    textAlign: 'center',
    lineHeight: 21,
  },
  img: {
    height: 50,
    width: 50,
  },
});
