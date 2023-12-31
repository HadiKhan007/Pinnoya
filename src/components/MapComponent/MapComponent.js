import {StyleSheet,View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
export const MapComponent = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
