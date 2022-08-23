import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {AddressesCard, AppHeader, Button} from '../../../../components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {VerifyProfile_List} from '../../../../shared/utilities/constant';
import {colors} from '../../../../shared/exporter';
const VerifyProfile = ({navigation}) => {
  const [edit, setEdit] = useState(null);
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Verify Profile'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={VerifyProfile_List}
              renderItem={({item, index}) => {
                return (
                  <AddressesCard
                    item={item}
                    editable={index === edit}
                    onPress={() => {
                      setEdit(index);
                    }}
                  />
                );
              }}
            />
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.btnCon}>
          <Button
            bgColor={colors.b_gradient}
            btnText={'Verify'}
            textColor={colors.white}
            onPressBtn={() => {
              navigation.navigate('PendingRequest');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VerifyProfile;
