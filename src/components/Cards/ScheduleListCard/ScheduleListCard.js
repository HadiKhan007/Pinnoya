import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, size, WP} from '../../../shared/exporter';
import {ListItem} from 'react-native-elements';
export const ScheduleListCard = ({
  title,
  subtitle,
  isExpanded,
  img,
  onPressExpanded,
  onPressable,
}) => {
  return (
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
            <Image source={img} style={styles.img} />
          </View>
        }
        isExpanded={isExpanded}
        onPress={onPressExpanded}
        containerStyle>
        {isExpanded ? (
          <TouchableOpacity
            onPress={onPressable}
            style={styles.contentContainer}>
            {/* Start Time */}
            <View style={styles.StartTime}>
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
      </ListItem.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: WP(80),
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: WP(5),
    overflow: 'hidden',
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
    width: WP(50),
  },
  subtitle: {
    maxWidth: WP('60'),
    width: WP(50),
  },
  img: {
    height: 10,
    width: 10,
    marginHorizontal: WP(68),
    marginTop: WP(-5),
  },
  contentContainer: {
    width: WP(78),
    backgroundColor: colors.g2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: WP(1),
  },
  StartTime: {
    width: WP(40),
    borderRightWidth: 1,
    marginLeft: WP(1),
  },
  StartTimetxt: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  StartDate: {
    fontSize: size.normal,
    // fontWeight: 'bold',
    color: 'purple',
  },
  EndTime: {
    width: WP(40),
    marginLeft: WP(1),
    // backgroundColor: 'red',
  },
  EndTimeTxt: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  EndDate: {
    fontSize: size.normal,
    // fontWeight: 'bold',
    color: 'purple',
  },
});
