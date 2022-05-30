import {
  DatePickerIOSBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AppHeader,
  BgImageBox,
  Button,
  DatePickerCard,
  PrimaryCard,
  TimePickerCard,
  TitleHeading,
} from '../../../../components';
import styles from './styles';
import {appImages, colors} from '../../../../shared/exporter';

const ScheduleNow = ({navigation}) => {
  const [selectedDate, setselectedDate] = useState(new Date());
  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 7; // disable Sunday
  };
  return (
    <>
      <AppHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <BgImageBox logo={appImages.welcome1} />
        </View>
        <View style={styles.secondContentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <PrimaryCard rating={true} />
            <DatePickerCard datesBlacklistFunc={datesBlacklistFunc} />
            <TimePickerCard
              dateValue={new Date()}
              minTime={new Date()}
              title={'Start Time'}
            />
            <TimePickerCard
              dateValue={new Date()}
              minTime={new Date()}
              title={'End Time'}
            />
            <View style={styles.btnContainer}>
              <Button
                onPressBtn={() => {
                  navigation?.navigate('BookingDetail');
                }}
                bgColor={colors.b_gradient}
                textColor={colors.white}
                btnText={'Next'}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default ScheduleNow;
