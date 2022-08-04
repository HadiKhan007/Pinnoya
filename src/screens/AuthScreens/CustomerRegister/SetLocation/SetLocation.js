import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {MapComponent, AuthHeader, SmallMapCard} from '../../../../components';
import {MapLocation} from '../../../../components/MapComponent/MapLocation';
import {colors, WP} from '../../../../shared/exporter';
import styles from './styles';

const SetLocation = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <MapComponent />
        <MapLocation
          title={'Set Location'}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};
export default SetLocation;
