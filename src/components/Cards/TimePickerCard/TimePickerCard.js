import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';
import {colors, WP} from '../../../shared/exporter';
import {TitleHeading} from '../..';

export const TimePickerCard = ({onDateChange, minTime, dateValue, title}) => {
  return (
    <View>
      <TitleHeading title={title} />

      <DatePicker
        fadeToColor={colors.white}
        textColor={colors.b1}
        mode={'time'}
        date={dateValue}
        style={{alignSelf: 'center'}}
        androidVariant={'nativeAndroid'}
        onDateChange={onDateChange}
        minimumDate={minTime}
        locale="en"
        is24hourSource={'locale'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    shadowColor: colors.box_shadow,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 10,
    marginVertical: 8,
  },
});
