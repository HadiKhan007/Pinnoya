import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
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
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 24,
    elevation: Platform.OS == 'ios' ? 0 : 12,
  },
});
