import React from 'react';
import {View, SafeAreaView, Text, Image, FlatList} from 'react-native';
import {AppHeader, TransactionCard} from '../../../../components';
import {appIcons, spacing, colors} from '../../../../shared/exporter';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

const PaymentPending = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={'Pending Amount'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.btnContainer}>
        <Text style={[styles.btnText]}>Pending Amount : ₱25.00</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image source={appIcons.circleAlert} style={styles.icon} />
        <Text numberOfLines={2} style={styles.text}>
          It’s the amount from last service, we hold it for 3 days before
          clearing for payout
        </Text>
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer2}>
          <View style={styles.borderStyle} />
          <Text style={styles.payments}>Recent Payments</Text>

          <FlatList
            data={[1, 2, 3, 4, 5]}
            key={(item, index) => item + index.toString()}
            renderItem={({item}) => {
              return (
                <View style={spacing.mx1}>
                  <TransactionCard backgroundColor={colors.white2} />
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <Divider style={[spacing.mx3]} color={colors.white3} />;
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default PaymentPending;
