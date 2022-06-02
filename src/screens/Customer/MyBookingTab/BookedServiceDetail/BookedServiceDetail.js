import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppHeader,
  AvailServiceCard,
  PrimaryButton,
  SmallMapCard,
  TitleAlphaHeading,
  Button,
  ServiceFeeBox,
  OngoingComp,
  CompleteComp,
} from '../../../../components';
import styles from './styles';
import {appIcons, colors, spacing} from '../../../../shared/exporter';

const BookedServiceDetail = ({navigation}) => {
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <AvailServiceCard status={'On going'} />
            <View style={spacing.my4}>
              <CompleteComp
                rating={rating}
                setRating={rat => {
                  setRating(rat);
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default BookedServiceDetail;
