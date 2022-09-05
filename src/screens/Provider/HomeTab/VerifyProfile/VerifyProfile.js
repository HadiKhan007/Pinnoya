import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {AddressesCard, AppHeader, Button} from '../../../../components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, VerifyProfile_List} from '../../../../shared/exporter';
const VerifyProfile = ({navigation}) => {
  const [text, setText] = useState([]);
  const [isEditing, setEdit] = useState(VerifyProfile_List);

  const editHandler = item => {
    console.log('res', item);
    setEdit(
      isEditing.map(obj =>
        obj.id == item?.id
          ? {...obj, editable: !obj.editable}
          : {...obj, editable: false},
      ),
    );
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Verify Profile'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.secondContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={isEditing}
            renderItem={({item, index}) => {
              return (
                <AddressesCard
                  item={item}
                  onPress={() => {
                    editHandler(item);
                  }}
                  editable={item.editable}
                  placeholder={'Pellentesque in ipsum id orci porta dapibus.'}
                  value={text}
                  onChangeText={value => setText(value)}
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
    </SafeAreaView>
  );
};
export default VerifyProfile;
