import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Button,
  DocumentCard,
  HomeHeader,
  ServiceDetailCard,
} from '../../../../components';
import {colors, serviceList, WP, spacing} from '../../../../shared/exporter';
import styles from './styles';
const SPDashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <HomeHeader title={'Hello Alice,'} subtitle={'What job do you need?'} />
      <View style={styles.btnContainer}>
        <Button
          bgColor={colors.b_gradient}
          width={WP(45)}
          height={WP(12)}
          btnText={'Wallet'}
          textColor={colors.white}
          onPressBtn={() => {
            navigation.navigate('PaymentMethod');
          }}
        />
        <Button
          bgColor={colors.b_gradient}
          width={WP(45)}
          height={WP(12)}
          btnText={'History'}
          textColor={colors.white}
          onPressBtn={() => {
            navigation.navigate('History');
          }}
        />
      </View>
      <DocumentCard
        onPress={() => {
          navigation.navigate('VerifyProfile');
        }}
      />
      <View style={styles.mainContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.secondContentContainer}>
            <Text style={styles.subtitle}>New Pending Jobs </Text>
            <TouchableOpacity>
              <Text style={[styles.allStyle, {marginVertical: -30}]}>
                View all
              </Text>
            </TouchableOpacity>
            <View style={styles.listContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={serviceList}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={spacing.mx1}
                      onPress={() => {
                        navigation?.navigate('ServiceDetail');
                      }}>
                      <ServiceDetailCard title={'Approve'} space />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>

            <Text style={styles.subtitle}>Schedule Paid Jobs </Text>
            <TouchableOpacity>
              <Text style={[styles.allStyle, {marginVertical: -29}]}>
                View all
              </Text>
            </TouchableOpacity>
            <View style={styles.listContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={serviceList}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={spacing.mx1}
                      onPress={() => {
                        navigation?.navigate('ServiceDetail');
                      }}>
                      <ServiceDetailCard title={'Approve'} space />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SPDashboard;
