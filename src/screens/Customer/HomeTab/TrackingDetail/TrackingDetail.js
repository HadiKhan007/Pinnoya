import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {MapComponent} from '../../../../components';
const TrackingDetail = () => {
  return (
    <>
      <View style={styles.container}>
        <MapComponent />
      </View>
    </>
  );
};

export default TrackingDetail;
