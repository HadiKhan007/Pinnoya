import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  PrimaryButton,
  ServiceFeeBox,
  SmallMapCard,
  TitleAlphaHeading,
  TitleHeading,
  DatePickerCard,
  ServiceTimeCard,
} from '..';
import {colors} from '../../shared/exporter';

export const ProviderOngoing = ({navigation, onPress}) => {
  const [selectedDate, setselectedDate] = useState(new Date());
  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 7; // disable Sunday
  };
  return (
    <View>
      <TitleAlphaHeading
        title={'Schedule'}
        subtitle={
          'Pellentesque in ipsum id orci porta dapibus. Ipsum id orci porta dapibus.'
        }
        isBtn
      />
      <TitleHeading title={'Schedule'} />
      <DatePickerCard datesBlacklistFunc={datesBlacklistFunc} />
      <View style={[styles.aiRow]}>
        {['10:00', '10:00', '10:00', '10:00'].map(item => {
          return <ServiceTimeCard title={item} subtitle={'Am'} />;
        })}
      </View>
      <TitleAlphaHeading title={'Payment Details'} />
      <ServiceFeeBox />
      <TitleAlphaHeading title={'Tracking Details'} />
      <SmallMapCard />
    </View>
  );
};

const styles = StyleSheet.create({
  btnCon: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  aiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    flexWrap: 'wrap',
  },
});
