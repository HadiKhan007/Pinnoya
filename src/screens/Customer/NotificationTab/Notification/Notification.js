import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppHeader, NotificationCard} from '../../../../components';
import styles from './styles';
const Notification = ({navigation}) => {
  return (
    <>
      <AppHeader title={'Notification'} rightArea={true} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={{flex: 1}}>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <NotificationCard item={item} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Notification;
