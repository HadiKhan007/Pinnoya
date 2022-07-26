import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {MapComponent, AuthHeader, SmallMapCard} from '../../../../components';
import {MapLocation} from '../../../../components/MapComponent/MapLocation';
import styles from './styles';

const SetLocation = ({navigation}) => {
  const tabref = useRef(null);
  return (
    <>
      <View style={styles.container}>
        <MapLocation
          backIcon={true}
          tabRef={tabref}
          onPressClose={() => {
            tabref?.current?.close();
          }}
          onPressBack={() => {
            tabref.current.open();
          }}
          navigation={navigation}
        />
      </View>
    </>
  );
};
export default SetLocation;
