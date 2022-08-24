import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {AddressesCard, AppHeader} from '../../../../components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {EditProfile_List} from '../../../../shared/exporter';
const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Edit Profile'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Lorem ipsum dolor</Text>
        <Text style={styles.subTitleText}>
          Pellentesque in ipsum id orci porta dapibus.
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={EditProfile_List}
            renderItem={({item, index}) => <AddressesCard item={item} />}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default EditProfile;
