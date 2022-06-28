import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './styles';
import {
  AppHeader,
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
          navigation?.navigate('AvailServiceDetail');
        }}
      />
    </>
  );
};

export default TrackingDetail;
