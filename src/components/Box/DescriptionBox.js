import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, profile_uri, size, WP} from '../../shared/exporter';

export const DescriptionBox = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Lorem ipsum</Text>
        <Text style={styles.subtitle}>
          Pellentesque in ipsum id orci porta dapibus. Ipsum id orci porta
          dapibus.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    shadowColor: colors.box_shadow,
    marginVertical: WP('5'),
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    padding: 20,
    height: 120,
    justifyContent: 'center',
  },
  title: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingBottom: 8,
  },
  subtitle: {
    color: colors.g1,
    fontSize: size.xsmall,
    fontFamily: family.Ubuntu_Regular,
  },
});
