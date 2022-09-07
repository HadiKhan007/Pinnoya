import React from 'react';
import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {AppHeader, HelpCard, WalletCard} from '../../../../components';
import {Wallet_List} from '../../../../shared/exporter';
import styles from './styles';
const Wallet = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={'Payment'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />

      <WalletCard />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={Wallet_List}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              shadowOpacity: 1,
            }}>
            <HelpCard
              containerStyle={styles.contentContainer}
              title={item.title}
              card={item.selected}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
export default Wallet;
