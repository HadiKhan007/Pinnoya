import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppHeader, AppInput, AuthHeading, Button} from '../../../../components';
import styles from './styles';
import {colors, spacing} from '../../../../shared/exporter';
import DownArrow from 'react-native-vector-icons/AntDesign';

const BookingDetail = ({navigation}) => {
  return (
    <>
      <AppHeader
        backIcon={true}
        title={'Booking Detail'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={spacing.mt10}>
            <AuthHeading
              title={'Personal Information'}
              subtitle={'Choose Kid or pet from you list'}
            />
          </View>
          <View>
            <TouchableOpacity>
              <AppInput
                placeholder={'Select Kid'}
                editable={false}
                rightIcon={() => (
                  <DownArrow name={'down'} size={20} color={colors.g2} />
                )}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AppInput
                placeholder={'Select Pet'}
                // editable={false}
                rightIcon={() => (
                  <DownArrow name={'down'} size={20} color={colors.g2} />
                )}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.aiCenter}>
            <Button
              onPressBtn={() => {
                navigation?.navigate('Dashboard');
              }}
              bgColor={colors.b_gradient}
              textColor={colors.white}
              btnText={'Submit'}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default BookingDetail;
