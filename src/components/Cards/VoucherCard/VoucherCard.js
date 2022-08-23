import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {WP, colors, size} from '../../../shared/exporter';
export const VoucherCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Lorem ipsum dolor</Text>
      <Text numberOfLines={1} style={styles.subTitle}>
        Pellentesque in ipsum id orci porta dapibus.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('85'),
    backgroundColor: colors.white,
    padding: WP('10'),
    borderRadius: 10,
    marginHorizontal: WP('4'),
    marginVertical: WP('3'),
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#00000050',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 10,
    elevation: Platform.OS == 'ios' ? 0 : 5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.g1,
    fontSize: size.small,
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});
