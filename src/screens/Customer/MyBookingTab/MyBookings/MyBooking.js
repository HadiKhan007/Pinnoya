import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  FourSegment,
  ServiceDetailCard,
} from '../../../../components';
import {spacing} from '../../../../shared/exporter';
const MyBooking = ({navigation}) => {
  const [tabIndex, settabIndex] = useState(0);
  return (
    <>
      <AppHeader
        backIcon={true}
        title={'My Booking'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={{flex: 1}}>
            <FourSegment
              title1={'Cancelled'}
              title2={'Completed'}
              title3={'On going'}
              title4={'Pending'}
              index={tabIndex}
              setIndex={i => {
                settabIndex(i);
              }}
            />
            <View style={{flex: 1}}>
              <FlatList
                style={spacing.mt10}
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4, 5]}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity onPress={() => {}}>
                      <ServiceDetailCard />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default MyBooking;
