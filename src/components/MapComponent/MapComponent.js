import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import {WP} from '../../shared/exporter';
export const MapComponent = ({modalRef}) => {
  return (
    <View style={{flex: 1}}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1, overflow: 'hidden'}}></MapView>
    </View>
  );
};

const styles = StyleSheet.create({});
