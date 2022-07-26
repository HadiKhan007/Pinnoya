import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import {WP} from '../../shared/exporter';

export const SmallMapCard = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('45'),
    zIndex: -1,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
});
