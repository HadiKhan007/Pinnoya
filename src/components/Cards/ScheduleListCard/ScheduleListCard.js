import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors, size, WP} from '../../../shared/exporter';
import {ListItem} from 'react-native-elements';
import BackArrow from 'react-native-vector-icons/AntDesign';
export const ScheduleListCard = ({
  title,
  subtitle,
  isExpanded,
  onPressExpanded,
  onPressable,
  backIcon,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.listContainer}>
        <ListItem.Accordion
          activeOpacity={1}
          noIcon={true}
          content={
            <View>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>{title}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>
                  {subtitle}
                </ListItem.Subtitle>
              </ListItem.Content>
              {backIcon && (
                <View style={styles.btnContainer}>
                  <BackArrow
                    name={'left'}
                    size={18}
                    color={colors.b1}
                    style={styles.bkIcon}
                  />
                </View>
              )}
            </View>
          }
          isExpanded={isExpanded}
          onPress={onPressExpanded}
          containerStyle></ListItem.Accordion>
      </View>
      {isExpanded ? (
        <TouchableOpacity onPress={onPressable} style={styles.contentContainer}>
          {/* Start Time */}
          <View style={[styles.StartTime]}>
            <Text style={styles.StartTimetxt}>Start Time:</Text>
            <Text style={styles.StartDate}>28 June 10:00AM</Text>
          </View>
          {/* End Time */}
          <View style={styles.EndTime}>
            <Text style={styles.EndTimeTxt}>End Time:</Text>
            <Text style={styles.EndDate}>28 June 12:00PM</Text>
          </View>
        </TouchableOpacity>
      ) : (
        false
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: WP('80'),
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: WP('5'),
    overflow: 'hidden',
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
    width: WP('50'),
  },
  subtitle: {
    maxWidth: WP('60'),
    width: WP('50'),
  },
  contentContainer: {
    width: WP('78'),
    backgroundColor: colors.g10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: WP('1'),
    marginTop: WP('-7'),
    marginBottom: WP('5'),
  },
  StartTime: {
    width: WP('35'),
    borderRightWidth: 0.5,
    marginLeft: WP('4'),
    borderRightColor: colors.g7,
  },
  StartTimetxt: {
    fontSize: size.medium,
    color: colors.b1,
    fontWeight: 'bold',
  },
  StartDate: {
    fontSize: size.normal,
    color: 'purple',
  },
  EndTime: {
    width: WP('40'),
    marginLeft: WP('4'),
  },
  EndTimeTxt: {
    fontSize: size.medium,
    color: colors.b1,
    fontWeight: 'bold',
  },
  EndDate: {
    fontSize: size.normal,
    color: 'purple',
  },
  btnContainer: {
    marginLeft: WP('68'),
    transform: [{rotateY: '180deg'}],
  },
  bkIcon: {marginTop: WP(-9)},
});
