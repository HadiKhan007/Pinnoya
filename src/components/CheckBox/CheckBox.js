import {StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';
import PropTypes from 'prop-types';
import {colors, family, size} from '../../shared/exporter';

export const Checkbox = ({
  toggleCheckBox,
  setToggleCheckBox,
  title,
  checkSize,
}) => {
  return (
    <CheckBox
      title={title}
      hitSlop={styles.hitSlop}
      containerStyle={styles.containerStyle}
      checked={toggleCheckBox}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      onPress={setToggleCheckBox}
      size={checkSize}
      checkedColor={colors.p1}
      uncheckedColor={colors.p1}
      textStyle={styles.textStyle}
    />
  );
};
const styles = StyleSheet.create({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 30,
  },
  textStyle: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
  },
  containerStyle: {
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});
