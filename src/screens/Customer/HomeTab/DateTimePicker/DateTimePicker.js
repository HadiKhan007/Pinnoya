import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {AppHeader, Button, TimeCard} from '../../../../components';
import {Calendar} from 'react-native-calendars';
import {colors, WP} from '../../../../shared/exporter';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
const DateTimePicker = ({navigation, route, date}) => {
  const {title} = route.params;
  const [state, setState] = useState({selectedDate: '', markedDates: {}});
  const [day, setDay] = useState({
    addmonth: moment(date).add(1, 'M').format('MMM'),
    currentMonth: moment(date).format('MMM'),
    subMonth: moment(date).subtract(1, 'M').format('MMM'),
  });
  const getSelectedDayEvents = day => {
    let markedDates = {};
    markedDates[day] = {
      selected: true,
      selectedColor: colors.p1,
    };
    let serviceDate = moment(day);
    serviceDate = serviceDate.format('DD.MM.YYYY');
    setState({
      serviceDate,
      markedDates,
    });
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
            onMonthChange={month => {
              setDay(month.month);
            }}
            // renderHeader={date => {
            //   return (
            //     <View style={styles.renderHeader}>
            //       <Text style={{color: 'black'}}>{day.addmonth}</Text>
            //       <Text style={{color: 'black'}}>{day.subMonth}</Text>
            //       <Text style={{color: 'black'}}>{day.currentMonth}</Text>
            //     </View>
            //   );
            // }}
            markingType="custom"
            markedDates={state.markedDates}
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
                  onPressBtn={() => {
                    navigation?.goBack();
                  }}
                  bgColor={colors.mb_gradient}
                  textColor={colors.b1}
                  btnText={'Cancel'}
                  width={WP(35)}
                />
                <Button
                  onPressBtn={() => {
                    navigation?.navigate('TrackingDetail');
                  }}
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
