import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from '../../components';
import {colors, family, size, WP} from '../../shared/exporter';

export const HomeModal = ({onPressHide, show, onPressBack}) => {
  return (
    <View>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleStyle}>Thank you for submitting</Text>
          <Text style={styles.subtitleStyle}>
            We will contact you within 24h for the service.
          </Text>
          <Button
            onPressBtn={onPressBack}
            btnText={'Back'}
            bgColor={colors.b_gradient}
            width={WP('80')}
            textColor={colors.white}
          />
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
});
