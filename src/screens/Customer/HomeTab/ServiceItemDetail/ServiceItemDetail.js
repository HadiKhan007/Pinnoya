import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AppHeader,
  BgImageBox,
  Button,
  JobModal,
  PrimaryCard,
  ReviewModal,
  SecondaryCard,
  SpecialityCard,
  TitleHeading,
  UploadPicCard,
  VerificationCard,
} from '../../../../components';
import styles from './styles';
import {appImages, colors} from '../../../../shared/exporter';
const ServiceItemDetail = ({navigation}) => {
  const reviewModalRef = useRef(null);
  const jobModalRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <AppHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <BgImageBox logo={appImages.welcome1} />
        </View>
        <View style={styles.secondContentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <PrimaryCard
              status={'Available'}
              desc={`Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
            ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui.`}
              onlineStatus={'Online'}
              rightIcon={true}
            />
            <View style={styles.aiRow}>
              <SecondaryCard
                onPress={() => {
                  reviewModalRef?.current?.open();
                }}
                img={true}
                title={'Review'}
                subtitle={'5.0'}
                width={'30%'}
              />
              <SecondaryCard
                title={'Jobs'}
                subtitle={'400'}
                width={'30%'}
                onPress={() => {
                  jobModalRef?.current?.open();
                }}
              />
              <SecondaryCard
                title={'Experience'}
                subtitle={'4 Years'}
                width={'30%'}
              />
            </View>
            <TitleHeading title={'Specialities'} />
            <View style={styles.aiRow}>
              {[1, 2, 3].map(item => {
                return <SpecialityCard subtitle={'Lorem ipsum'} />;
              })}
            </View>
            <TitleHeading title={'Vaccination'} />
            <UploadPicCard />
            <TitleHeading title={'License'} />
            <View style={styles.aiRow}>
              {[1, 2, 3].map(item => {
                return <UploadPicCard width={'30%'} />;
              })}
            </View>
            <TitleHeading title={'Certificates'} />
            <View style={styles.aiRow}>
              {[1, 2, 3].map(item => {
                return <UploadPicCard width={'30%'} />;
              })}
            </View>

            <TitleHeading title={'Verification'} />
            <View style={[styles.aiRow, {justifyContent: 'flex-start'}]}>
              {['Phone number', 'Passport', 'ID'].map(item => {
                return <VerificationCard subtitle={item} />;
              })}
            </View>
            <View style={styles.aiCenter}>
              <Button
                onPressBtn={() => {
                  navigation?.navigate('ScheduleNow');
                }}
                bgColor={colors.b_gradient}
                btnText={'Schedule Now'}
                textColor={colors.white}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <ReviewModal
        modalRef={reviewModalRef}
        onPressClose={() => {
          reviewModalRef?.current?.close();
        }}
      />
      <JobModal
        modalRef={jobModalRef}
        onPressClose={() => {
          jobModalRef?.current?.close();
        }}
        expanded={expanded}
        onPressAccord={handlePress}
      />
    </>
  );
};

export default ServiceItemDetail;
