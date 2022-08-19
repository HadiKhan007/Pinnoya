import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, HomeHeader, ServiceDetailCard} from '../../../../components';
import {colors, serviceList, WP, spacing} from '../../../../shared/exporter';
import styles from './styles';
const PendingRequest = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <HomeHeader title={'Hello Alice,'} subtitle={'Jobs'} />
      <View style={styles.btnContainer}>
        <Button
          bgColor={colors.b_gradient}
          width={WP(45)}
          height={WP(10)}
          btnText={'Pending Request'}
          textColor={colors.white}
          onPressBtn={() => {
            navigation.navigate('SPJobs');
          }}
        />
        <Button
          width={WP(45)}
          height={WP(10)}
          btnText={'Complete Request'}
          textColor={colors.b1}
        />
      </View>
      <View style={styles.mainContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.secondContentContainer}>
            <Text style={styles.subtitle}>Pending requests </Text>
            <TouchableOpacity>
              <Text style={[styles.allStyle, {top: -30}]}>View all</Text>
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
                      <ServiceDetailCard title={'Hire'} space={true} />
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
export default PendingRequest;
