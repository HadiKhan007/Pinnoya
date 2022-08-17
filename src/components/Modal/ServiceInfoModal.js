import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  ServiceFeeBox,
  TitleHeading,
  UserInfoBox,
  AuthHeading,
  ServiceInfoBox,
  ServiceSlider,
} from '..';
import {colors, spacing, WP} from '../../shared/exporter';

export const ServiceInfoModal = ({onPressBtn}) => {
  return (
    <View style={styles.contentContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserInfoBox />
        <ServiceInfoBox />
        <ServiceSlider />
        <View style={spacing.my4}>
          <TitleHeading title={'Payment'} />
          <AuthHeading
            title={'Add a voucher'}
            flexDirection={true}
            icon={true}
            marginLeft={WP('3')}
          />
          <ServiceFeeBox onPressBtn={onPressBtn} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white2,
    padding: 10,
  },

  borderStyle: {
    borderWidth: 3,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '15%',
    marginTop: 5,
  },
  contentContainer: {
    paddingHorizontal: WP('4'),
  },
});
