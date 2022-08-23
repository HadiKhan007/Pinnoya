import React from 'react';
import {SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {AppHeader, HelpCard} from '../../../../components';
import {Help_List} from '../../../../shared/exporter';
const HelpCenter = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Help center'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <FlatList
        data={Help_List}
        renderItem={({item}) => {
          return (
            <View>
              <HelpCard title={item.title} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default HelpCenter;
