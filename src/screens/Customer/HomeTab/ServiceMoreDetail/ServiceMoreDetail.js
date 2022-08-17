import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppHeader, ServiceInfoModal} from '../../../../components';
const ServiceMoreDetail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <AppHeader
          backIcon={true}
          onPressBack={() => {
            navigation?.goBack();
          }}
          title={'Service Detail'}
        />
        <ServiceInfoModal
          onPressBtn={() => {
            modalRef?.current?.close();
            navigation?.navigate('AvailServiceDetail');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ServiceMoreDetail;
