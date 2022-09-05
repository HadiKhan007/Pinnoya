import {ScrollView, View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AppHeader,
  BgImageBox,
  Button,
  JobModal,
  PrimaryCard,
  ReviewModal,
  SecondaryCard,
  TitleHeading,
  UploadPicCard,
  VerificationCard,
  DatePickerCard,
  ServiceTimeCard,
  TitleAlphaHeading,
  SmallMapCard,
} from '../../../../components';
import styles from './styles';
import {appIcons, appImages, colors, WP} from '../../../../shared/exporter';
const CustomerDetail = ({navigation, isActive}) => {
  const reviewModalRef = useRef(null);
  const jobModalRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedDate, setselectedDate] = useState(new Date());
  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 7; // disable Sunday
  };
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
              status={'Searching'}
              desc={`Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`}
              onlineStatus={'Online'}
              //   rightIcon={true}
            />
            <View style={styles.btnContainer}>
              <Button
                bgColor={colors.b_gradient}
                width={WP(40)}
                height={WP(13)}
                img={appIcons.message}
                textColor={colors.white}
                onPressBtn={() => {
                  navigation.navigate('Chat');
                }}
              />
              <Button
                bgColor={colors.b_gradient}
                width={WP(40)}
                height={WP(13)}
                img={appIcons.call}
                textColor={colors.white}
                onPressBtn={() => {
                  navigation.navigate('CallNow');
                }}
              />
            </View>
            <View style={styles.aiRow}>
              <SecondaryCard
                onPress={() => {
                  reviewModalRef?.current?.open();
                }}
                img={true}
                title={'Review'}
                subtitle={'5.0'}
                width={'48%'}
              />
              <SecondaryCard
                title={'Experience'}
                subtitle={'4 Years'}
                width={'48%'}
              />
            </View>

            <TitleHeading title={'Schedule'} />
            <DatePickerCard datesBlacklistFunc={datesBlacklistFunc} />
            <View style={[styles.aiRow]}>
              {['10:00', '10:00', '10:00', '10:00'].map(item => {
                return <ServiceTimeCard title={item} subtitle={'Am'} />;
              })}
            </View>
            <TitleAlphaHeading
              title={'Tracking Details'}
              onPress={() => {
                navigation.navigate('TrackingDetail');
              }}
            />
            <SmallMapCard />

            <TitleHeading title={'Payment'} />
            <View style={styles.boxContainer}>
              <View style={styles.borderStyle} />
              <Text style={styles.smTitle}>Proin eget tortor risus</Text>
              <Text style={styles.title}>₱00.00</Text>
            </View>
            <TitleHeading title={'Vaccination'} />
            <UploadPicCard />
            <TitleHeading title={'Verification'} />
            <View style={[styles.aiRow, {justifyContent: 'flex-start'}]}>
              {['Phone number', 'Passport', 'ID'].map(item => {
                return <VerificationCard subtitle={item} />;
              })}
            </View>
            <View style={styles.aiCenter}>
              <Button
                onPressBtn={() => {
                  navigation.navigate('SPServiceDetail');
                }}
                bgColor={colors.b_gradient}
                btnText={'Accept'}
                textColor={colors.white}
              />
              <Button
                onPressBtn={() => {
                  navigation?.navigate('OfferSuccess');
                }}
                bgColor={colors.db_gradient}
                btnText={'Reject'}
                textColor={colors.p1}
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

export default CustomerDetail;
