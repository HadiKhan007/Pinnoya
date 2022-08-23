import React from 'react';
import {SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import styles from './styles';
import {AppHeader, TransactionCard} from '../../../../components';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {colors, spacing} from '../../../../shared/exporter';
const TransactionHistory = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Transaction History'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => {
              return (
                <View style={spacing.mx1}>
                  <TransactionCard />
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <Divider style={[spacing.mx3]} color={colors.white3} />;
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default TransactionHistory;
