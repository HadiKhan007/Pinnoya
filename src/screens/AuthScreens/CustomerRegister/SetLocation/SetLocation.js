import React, {useEffect, useState} from 'react';
import {MapComponent, MapLocation, MyStatusBar} from '../../../../components';

const SetLocation = ({navigation, route}) => {
  const [name, setName] = useState();
  useEffect(() => {
    setName(route.params);
  }, [navigation]);
  return (
    <>
      <MyStatusBar backgroundColor={'transparent'} />
      <MapComponent />
      <MapLocation
        title={route.params === undefined ? 'Set location' : route.params.name}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPress={() => {
          navigation.navigate('TrackingDetail');
        }}
      />
    </>
  );
};
export default SetLocation;
