import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {AdressesCard, AppHeader} from '../../../../components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Addresses_list} from '../../../../shared/exporter';
const MyAddresses = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Addresses'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Save Addresses</Text>
        <Text style={styles.subTitleText}>
          Pellentesque in ipsum id orci porta dapibus.
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={Addresses_list}
            renderItem={({item}) => {
              return (
                <View>
                  <AdressesCard item={item} icon={true} />
                </View>
              );
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default MyAddresses;
