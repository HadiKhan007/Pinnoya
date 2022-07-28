import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {MapComponent, AuthHeader, SmallMapCard} from '../../../../components';
import {MapLocation} from '../../../../components/MapComponent/MapLocation';
import {colors, WP} from '../../../../shared/exporter';
import styles from './styles';

const SetLocation = ({navigation}) => {
  const tabref = useRef(null);
  return (
    <>
      <View style={styles.container}>
        <MapComponent />
        <MapLocation
          title={'Set Location'}
          backIcon={true}
          tabRef={tabref}
          onPressBack={() => {
            // navigation.goBack();
            tabref.current.open();
          }}
        />
      </View>
    </>
  );
};
export default SetLocation;
