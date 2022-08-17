import {View} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import {
  Button,
  MapComponent,
  MapHeader,
  UserInfoModal,
} from '../../../../components';
import {colors, WP} from '../../../../shared/exporter';
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
        <View style={styles.btnCon}>
          <Button
            btnText={'View Detail'}
            bgColor={colors.db_gradient}
            textColor={colors.p1}
            onPressBtn={() => {
              modalRef?.current?.open();
            }}
          />
        </View>
      </View>
      <UserInfoModal
        modalRef={modalRef}
        height={WP('160')}
        onPressBtn={() => {
          modalRef?.current?.close();
          navigation?.navigate('BookingDetail');
        }}
      />
    </>
  );
};

export default TrackingDetail;
