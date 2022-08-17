import React from 'react';
import {Text, View, StyleSheet, Image,Platform} from 'react-native';
import {WP, colors, size, appImages} from '../../../shared/exporter';
export const FavouriteCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Lorem ipsum dolor</Text>
        <Text style={styles.subTitle}>
          Pellentesque in ipsum id orci porta dapibus.
        </Text>
      </View>
      <Image source={appImages.pana2} style={styles.panaImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('85'),
    backgroundColor: colors.white,
    padding: WP('5'),
    borderRadius: 10,
    marginHorizontal: WP('7'),
    marginVertical: WP('3'),
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 24,
    elevation: Platform.OS == 'ios' ? 0 : 12,
    flexDirection: 'row',
  },
  textContainer: {width: WP('55')},
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.g1,
    fontSize: size.small,
  },
  panaImage: {
    height: 80,
    width: 80,
  },
});
