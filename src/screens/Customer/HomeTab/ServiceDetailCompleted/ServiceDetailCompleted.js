import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {
  AppHeader,
  AvailServiceCard,
  CompleteComp,
} from '../../../../components';
import {spacing} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const ServiceDetailCompleted = ({navigation}) => {
  const [rating, setRating] = useState(0);
  return (
    <SafeAreaView style={styles.safeView}>
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
            <AvailServiceCard status={'Completed'} />
            <View style={spacing.my4}>
              <CompleteComp
                rating={rating}
                setRating={rat => {
                  setRating(rat);
                }}
                onPressBack={() => {
                  navigation?.navigate('LocationFinder');
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ServiceDetailCompleted;
