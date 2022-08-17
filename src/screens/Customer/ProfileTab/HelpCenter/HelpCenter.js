import React from 'react';
import {SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {AppHeader, HelpCard} from '../../../../components';
import {Help_List} from '../../../../shared/utilities/constant';
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
      <View style={styles.container}>
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
      </View>
    </SafeAreaView>
  );
};
export default HelpCenter;
