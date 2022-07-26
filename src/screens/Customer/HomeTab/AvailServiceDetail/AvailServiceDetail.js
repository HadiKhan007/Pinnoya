import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AppHeader,
  AvailServiceCard,
  PrimaryButton,
  SmallMapCard,
  TitleAlphaHeading,
  Button,
} from '../../../../components';
import styles from './styles';
import {appIcons, colors, spacing} from '../../../../shared/exporter';

const AvailServiceDetail = ({navigation}) => {
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
            <AvailServiceCard />
            <View style={spacing.my4}>
              <TitleAlphaHeading
                title={'Schedule'}
                img={appIcons.pencil}
                subtitle={
                  'Pellentesque in ipsum id orci porta dapibus. Ipsum id orci porta dapibus.'
                }
              />
              <View style={styles.btnCon}>
                <PrimaryButton
                  bgColor={colors.b_gradient}
                  btnText1={'Mon'}
                  btnText2={'20'}
                  textColor={colors.white}
                />
                <PrimaryButton
                  bgColor={colors.half_white_gradient}
                  btnText1={'10:00'}
                  btnText2={'AM'}
                  textColor={colors.p1}
                />
              </View>
              <TitleAlphaHeading
                title={'Tracking Details'}
                img={appIcons.pencil}
              />
              <SmallMapCard />
              <TitleAlphaHeading
                title={'Payment Details'}
                img={appIcons.pencil}
                subtitle={
                  'Pellentesque in ipsum id orci porta dapibus. Ipsum id orci porta dapibus.'
                }
              />
              {/* <View style={styles.btnCon}>
                <Button
                  onPressBtn={() => {
                    navigation?.navigate('Dashboard');
                  }}
                  bgColor={colors.b_gradient}
                  btnText={'Book Now'}
                  textColor={colors.white}
                />
              </View> */}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default AvailServiceDetail;
