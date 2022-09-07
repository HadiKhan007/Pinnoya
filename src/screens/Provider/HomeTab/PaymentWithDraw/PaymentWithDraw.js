import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AppHeader, PaymentCard, PaymentDrawCard} from '../../../../components';
import styles from './styles';
const PaymentWithDraw = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={'Withdraw'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <PaymentDrawCard
        onPress={() => {
          navigation.navigate('PaymentPending');
        }}
      />
    </SafeAreaView>
  );
};
export default PaymentWithDraw;
