import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, WP} from '../../../shared/exporter';
import {TitleHeading} from '../..';
import CalendarStrip from 'react-native-calendar-strip';
export const DatePickerCard = ({datesBlacklistFunc}) => {
  return (
    <View>
      {/* <TitleHeading title={'Set Your Date'} /> */}
      <CalendarStrip
        startingDate={new Date()}
        datesBlacklist={datesBlacklistFunc}
        numDaysInWeek={3}
        style={styles.calenderContainer}
        scrollable={true}
        calendarHeaderFormat={'MMMM'}
        showMonth={false}
        daySelectionAnimation={styles.selectDateStyle}
        highlightDateNameStyle={{color: colors.white}}
        highlightDateNumberStyle={{color: colors.white}}
        dayContainerStyle={[styles.dayStyle, {backgroundColor: colors.g5}]}
        iconStyle={{display: 'none'}}
        highlightDateContainerStyle={styles.highlightText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dayStyle: {
    backgroundColor: colors.g5,
    borderRadius: 10,
  },
  selectDateStyle: {
    highlightColor: colors.p1,
    type: 'background',
  },
  highlightText: {
    backgroundColor: colors.p1,
    borderRadius: 10,
  },
  calenderContainer: {
    height: WP('20'),
  },
  container: {
    padding: 8,
    // backgroundColor: colors.white,
    shadowColor: colors.box_shadow,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 10,
    marginVertical: 5,
  },
});
