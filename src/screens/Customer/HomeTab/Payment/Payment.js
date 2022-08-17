import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {AppHeader, Button} from '../../../../components';
import {colors} from '../../../../shared/exporter';
import styles from './styles';
const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Payment method'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>₱00.00</Text>
        </View>
        <View style={styles.aiCenter}>
          <Button
            onPressBtn={() => {
              navigation.navigate('PaymentVerification');
            }}
            bgColor={colors.b_gradient}
            btnText={'Payment'}
            textColor={colors.white}
            width={'100%'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Payment;
