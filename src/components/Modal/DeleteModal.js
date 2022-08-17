import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from '../../components';
import {colors, family, size, WP} from '../../shared/exporter';

export const DeleteModal = ({
  onPressHide,
  show,
  onPressBack,
  img,
  maxHeight,
  image,
}) => {
  return (
    <View>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={[styles.modalContainer]}>
          <Image source={img} style={styles.img} />
          <Text style={[styles.titleStyle, {maxHeight: maxHeight}]}>
            Delete Notification
          </Text>
          <Text style={styles.subtitleStyle}>
            Are you sure you want to delete the selected notication?
          </Text>
          <View style={styles.btnCon}>
            <Button
              onPressBtn={onPressBack}
              btnText={'No'}
              bgColor={colors.gb_grandient}
              width={WP('25')}
              textColor={colors.white}
            />
            <Button
              onPressBtn={onPressBack}
              btnText={'Yes'}
              bgColor={colors.b_gradient}
              width={WP('25')}
              textColor={colors.white}
            />
          </View>
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
  btnCon: {
    flexDirection: 'row',
    width: WP('55'),
    justifyContent: 'space-between',
  },
});
