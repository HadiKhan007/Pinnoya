import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import {
  WP,
  colors,
  size,
  appIcons,
  family,
  booked_status_color,
  booked_status_text_color,
} from '../../../shared/exporter';
export const HistoryCard = ({status}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.leftCon}>
        <Image style={styles.imageStyle} source={appIcons.photo} />
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Lorem ipsum dolor</Text>
        <Text style={styles.subTitle}>
          Short Description text goes here, and can be pulled form profile.
        </Text>
        {status && (
          <View
            style={[
              styles.statusStyle,
              {backgroundColor: booked_status_color(status)},
            ]}>
            <Text
              style={[
                styles.textStyle,
                {color: booked_status_text_color(status)},
              ]}>
              {status}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 120,
    marginVertical: 15,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#00000050',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 10,
    elevation: Platform.OS == 'ios' ? 0 : 5,
    overflow: 'hidden',
  },
  textContainer: {
    width: WP('65'),
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.g1,
    fontSize: size.small,
    width: '100%',
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  leftCon: {
    backgroundColor: colors.g3,
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    borderRadius: 10,
    height: 25,
    marginTop: 6,
    marginHorizontal: 5,
  },
  textStyle: {
    fontSize: size.xxxtiny,
    fontFamily: family.Ubuntu_Regular,
    color: colors.white,
  },
});
