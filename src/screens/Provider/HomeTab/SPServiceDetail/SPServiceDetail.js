import {View} from 'react-native';
import React, {useState} from 'react';
import {
  AppHeader,
  AvailServiceCard,
  OngoingComp,
  ProviderOngoing,
} from '../../../../components';
import styles from './styles';
import {spacing} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';

const SPServiceDetail = ({navigation}) => {
  const {userType} = useSelector(state => state.userType);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  return (
    <>
      <AppHeader
        backIcon={true}
        title={'Service Detail'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <AvailServiceCard
              status={'On going'}
              isBtn={true}
              onPressCall={() => {
                navigation.navigate('CallNow');
              }}
              onPressChat={() => {
                navigation.navigate('Chat');
              }}
            />
            <View style={spacing.my4}>
              <ProviderOngoing />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </>
  );
};

export default SPServiceDetail;
