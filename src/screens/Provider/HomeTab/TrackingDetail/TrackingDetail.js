import {View} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import {MapComponent, MapHeader} from '../../../../components';
const TrackingDetail = ({navigation}) => {
  const modalRef = useRef(null);

  return (
    <>
      <View style={styles.container}>
        <MapHeader
          backIcon={true}
          onPressBack={() => {
            navigation?.goBack();
          }}
          title={'Tracking Detail'}
        />
        <MapComponent modalRef={modalRef} />
      </View>
    </>
  );
};

export default TrackingDetail;
