import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppHeader, ServiceDetailCard} from '../../../../components';
import {spacing} from '../../../../shared/exporter';
const Favourite = ({navigation}) => {
  return (
    <>
      <AppHeader
        title={'Favourites'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={{flex: 1}}>
            <FlatList
              style={spacing.mt10}
              showsVerticalScrollIndicator={false}
              data={[1, 2, 3, 4, 5]}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation?.navigate('BookedServiceDetail');
                    }}>
                    <ServiceDetailCard />
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
export default Favourite;
