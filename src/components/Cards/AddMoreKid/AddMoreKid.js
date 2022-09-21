import React, {useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {AppInput, Checkbox} from '../../../components';
import {colors} from '../../../shared/exporter';
export const AddMoreKid = ({
  onChangeTextKidname,
  onChangeTextKidAge,
  kidAgeValue,
  kidNameValue,
  onBlurKidName,
  onBlurKidAge,
  touchedKidAge,
  touchedKidName,
  kidAgeError,
  kidNamerror,
}) => {
  const [checked, setchecked] = useState(false);
  return (
    <View style={styles.boxContainer}>
      <AppInput
        placeholder={'Kid Name'}
        placeholderTextColor={colors.g2}
        onChangeText={onChangeTextKidname}
        value={kidNameValue}
        onBlur={onBlurKidName}
        touched={touchedKidName}
        error={kidAgeError}
        blurOnSubmit={false}
        keyboardType="decimal-pad"
      />
      <AppInput
        placeholder={'Kid Age'}
        placeholderTextColor={colors.g2}
        onChangeText={onChangeTextKidAge}
        value={kidAgeValue}
        onBlur={onBlurKidAge}
        touched={touchedKidAge}
        error={kidNamerror}
        blurOnSubmit={false}
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
