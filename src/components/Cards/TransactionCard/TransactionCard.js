import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {WP, colors, size, family} from '../../../shared/exporter';
export const TransactionCard = ({backgroundColor}) => {
  return (
    <>
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: backgroundColor ? backgroundColor : colors.white},
        ]}>
        <View style={styles.contentContanier}>
          <Text style={styles.title}>Job Name</Text>
          <Text numberOfLines={2} style={styles.subTitle}>
            Pellentesque in ipsum id orci porta dapibus.
          </Text>
        </View>
        <View>
          <Text style={styles.payText}>₱265.00</Text>
          <Text style={styles.dayText}>2 days ago</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    padding: WP('2'),
    borderRadius: 10,
    marginHorizontal: WP('2'),
    flexDirection: 'row',
  },
  contentContanier: {
    width: '80%',
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
  },
  subTitle: {
    color: colors.g1,
    fontSize: size.small,
    width: '100%',
    fontFamily: family.Ubuntu_Regular,
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  payText: {
    color: colors.b1,
    fontSize: size.normal,
    fontWeight: 'bold',
    left: 10,
    top: 5,
  },
  dayText: {
    color: colors.g1,
    fontSize: size.tiny,
    left: 15,
    top: 5,
  },
});
