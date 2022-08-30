import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {
  AppHeader,
  NotificationCard,
  ProviderNotificationCard,
  SearchModal,
} from '../../../../components';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Notification = ({navigation}) => {
  const SearchRef = useRef(null);
  const {userType} = useSelector(state => state.userType);
  const dispatch = useDispatch();
  return (
    <>
      <AppHeader title={'Notification'} rightArea={true} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.contentContainer2}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({item}) =>
                  userType == 'Provider' ? (
                    <ProviderNotificationCard
                      status={'Searching'}
                      onPress={() => {
                        SearchRef.current.open();
                      }}
                    />
                  ) : (
                    <TouchableOpacity>
                      <NotificationCard />
                    </TouchableOpacity>
                  )
                }
              />
            </KeyboardAwareScrollView>
          </View>
        </View>
      </View>

      <SearchModal SearchRef={SearchRef} />
    </>
  );
};

export default Notification;
