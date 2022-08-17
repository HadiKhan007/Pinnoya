import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppHeader, NotificationCard} from '../../../../components';
import styles from './styles';
import {WP} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Notification = ({navigation}) => {
  return (
    <>
      <AppHeader title={'Notification'} rightArea={true} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={{flex: 1, padding: WP('5')}}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
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
            </KeyboardAwareScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default Notification;
