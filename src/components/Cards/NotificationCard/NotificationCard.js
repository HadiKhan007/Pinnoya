import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, profile_uri, size} from '../../../shared/exporter';

export const NotificationCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCon}>
        <View style={styles.imageCon}>
          <Image style={styles.imageStyle} source={{uri: profile_uri}} />
        </View>
      </View>
      <View style={styles.centerCon}>
        <Text style={styles.h1}>Lorem ipsum</Text>
        <Text style={styles.h2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          amet, consectetur adipiscing elit.
        </Text>
      </View>
      <View style={styles.rightCon}>
        <Text style={styles.h3}>1 min ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 70,
    marginVertical: 10,
  },
  leftCon: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  centerCon: {
    paddingVertical: 10,
    width: '55%',
  },
  rightCon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  imageCon: {
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: colors.g3,
  },
  h2: {
    fontSize: size.xxxtiny,
    fontFamily: family.Ubuntu_Light,
    color: colors.g1,
    marginTop: 5,
  },
  h1: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  h3: {
    color: colors.g4,
    fontSize: size.xxxtiny,
    fontFamily: family.Ubuntu_Regular,
  },
});
