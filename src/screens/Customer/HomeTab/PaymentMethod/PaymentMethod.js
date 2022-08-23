import React, {useRef, useState} from 'react';
import {View, SafeAreaView, FlatList, ScrollView} from 'react-native';
import {AppHeader, PaymentCard} from '../../../../components';
import {appIcons, Payment_List} from '../../../../shared/exporter';
import styles from './styles';
const PaymentMethod = ({navigation}) => {
  const [checked, setChecked] = useState(null);
  const tabRef = useRef(null);
  const bankRef = useRef(null);
  const PayRef = useRef(null);
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Payment method'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={Payment_List}
          renderItem={({item, index}) => {
            return (
              <View>
                <PaymentCard
                  tabRef={tabRef}
                  bankRef={bankRef}
                  PayRef={PayRef}
                  onPress={() => {
                    setChecked(index);
                    index === 0
                      ? tabRef.current.open()
                      : index === 1
                      ? bankRef.current.open()
                      : index === 2
                      ? tabRef.current.open()
                      : null;
                  }}
                  title={item.title}
                  img={
                    index === checked ? appIcons.checked : appIcons.unChecked
                  }
                  onPressBtn={() => {
                    PayRef.current.open();
                  }}
                  onPayPress={() => {
                    navigation.navigate('PaymentVerification');
                  }}
                />
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default PaymentMethod;
