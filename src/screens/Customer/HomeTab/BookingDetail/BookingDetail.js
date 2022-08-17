import {View, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AppHeader,
  AppInput,
  AuthHeading,
  Button,
  ListModal,
  ServiceModal,
} from '../../../../components';
import styles from './styles';
import {
  colors,
  kids,
  pets,
  spacing,
  WP,
} from '../../../../shared/exporter';
import DownArrow from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';

const BookingDetail = ({navigation}) => {
  const [openModal, setopenModal] = useState(false);
  const kidlistRef = useRef(null);
  const petlistRef = useRef(null);

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
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <View style={spacing.mt10}>
              <AuthHeading
                title={'Personal Information'}
                subtitle={'Choose Kid or pet from you list'}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  petlistRef?.current?.open();
                }}>
                <AppInput
                  onPressIn={() => {
                    kidlistRef?.current?.open();
                  }}
                  placeholder={'Select Kid'}
                  editable={false}
                  rightIcon={() => (
                    <DownArrow name={'down'} size={20} color={colors.g2} />
                  )}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  petlistRef?.current?.open();
                }}>
                <AppInput
                  onPressIn={() => {
                    petlistRef?.current?.open();
                  }}
                  placeholder={'Select Pet'}
                  editable={false}
                  rightIcon={() => (
                    <DownArrow name={'down'} size={20} color={colors.g2} />
                  )}
                />
              </TouchableOpacity>
              <TextInput
                style={[styles.inputStyle]}
                placeholder={'Alergies or Special Needs (Optional)'}
                placeholderTextColor={colors.g2}
                onChangeText={text => {}}
                mode={'outlined'}
                outlineColor={colors.g2}
                activeOutlineColor={colors.p1}
                theme={{roundness: 10}}
                dense={true}
                multiline={true}
              />
            </View>
            <View style={styles.aiCenter}>
              <Button
                onPressBtn={() => {
                  setopenModal(true);
                }}
                bgColor={colors.b_gradient}
                textColor={colors.white}
                btnText={'Submit'}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <ListModal
        listRef={kidlistRef}
        list={kids}
        height={WP('120')}
        title={'Select Number of Kids'}
        getValue={val => {}}
      />
      <ListModal
        listRef={petlistRef}
        list={pets}
        height={WP('120')}
        title={'Select Number of Pets'}
        getValue={val => {}}
      />
      <ServiceModal
        show={openModal}
        onPressBack={() => {
          setopenModal(false);
        }}
      />
    </>
  );
};

export default BookingDetail;
