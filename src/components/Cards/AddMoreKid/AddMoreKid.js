import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppInput, Checkbox} from '../../../components';
import {colors, family, size, WP} from '../../../shared/exporter';
const AddMoreKid = ({title, subtitle, onChangeText}) => {
  const [checked, setchecked] = useState(false);
  return (
    <View style={styles.boxContainer}>
      <AppInput
        placeholder={title}
        placeholderTextColor={colors.g2}
        onChangeText={onChangeText}
      />
      <AppInput
        placeholder={subtitle}
        placeholderTextColor={colors.g2}
        onChangeText={onChangeText}
      />
      <Checkbox
        checkSize={14}
        toggleCheckBox={checked}
        setToggleCheckBox={() => {
          setchecked(!checked);
        }}
        title={'If child with special needs or PWD Person With Disability'}
      />
    </View>
  );
};
export default AddMoreKid;

const styles = StyleSheet.create({
  boxContainer: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
});
