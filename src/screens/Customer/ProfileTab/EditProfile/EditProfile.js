import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {AddressesCard, AppHeader} from '../../../../components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {EditProfile_List, EditProfile_List2} from '../../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';

const EditProfile = ({navigation}) => {
  const {userType} = useSelector(state => state.userType);
  const [text, setText] = useState([]);
  const [isEditing, setEdit] = useState(
    userType == 'Provider' ? EditProfile_List2 : EditProfile_List,
  );

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

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Edit Profile'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      {userType == 'Provider' ? (
        <View style={styles.contentContainer} />
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>Lorem ipsum dolor</Text>
          <Text style={styles.subTitleText}>
            Pellentesque in ipsum id orci porta dapibus.
          </Text>
        </View>
      )}

      <View style={styles.secondContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={isEditing}
            renderItem={({item, index}) => (
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
            )}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default EditProfile;
