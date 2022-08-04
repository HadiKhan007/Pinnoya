import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {AppHeader, Button, FourSegment} from '../../../../components';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {colors, size, WP} from '../../../../shared/exporter';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import moment from 'moment';
import {TimeCard} from '../../../../components/Cards/TimeCard/TimeCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const DateTimePicker = ({navigation, route}) => {
  const {title} = route.params;
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [markedDates, setmarkedDates] = useState({});
  const getSelectedDayEvents =  day=> {

    console.log(markedDates);
    markedDates[day] = {
      ...markedDates,
      selected: true,
      selectedColor: 'red',
      dotColor: colors.white,
      marked: true,
      customStyles: {
        container: {
          borderRadius: 0,
          backgroundColor: colors.b1,
          elevation: 2,
        },
        text: {
          color: colors.white,
          fontWeight: 'bold',
        },
      },
    };
  };
  return (
    <>
      <AppHeader
        backIcon={true}
        title={title}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Calendar
            markingType="custom"
            markedDates={markedDates}
            // onDayPress={selectedStartDate}
            onDayPress={day => {
          
              getSelectedDayEvents(day.dateString);
            }}
            disabledDaysIndexes={[0, 6]}
          />
          {/* Time */}
          <View style={styles.secondContentContainer}>
            <Text style={styles.txt}>Enter Time</Text>

            <View style={styles.cardContainer}>
              <TimeCard
                Header={'Start Time'}
                title={'HOUR'}
                subtitle={'MINUTE'}
              />
              <TimeCard
                Header={'End Time'}
                title={'HOUR'}
                subtitle={'MINUTE'}
              />
              <View style={styles.Btn}>
                <Button
                  bgColor={colors.mb_gradient}
                  textColor={colors.b1}
                  btnText={'Cancel'}
                  width={WP(35)}
                />
                <Button
                  bgColor={colors.b_gradient}
                  textColor={colors.white}
                  btnText={'Save'}
                  width={WP(35)}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};
export default DateTimePicker;
