import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  PrimaryButton,
  ServiceFeeBox,
  SmallMapCard,
  TitleAlphaHeading,
} from '..';
import {colors} from '../../shared/exporter';

export const OngoingComp = ({navigation,onPress}) => {
  return (
    <View>
      <TitleAlphaHeading
        title={'Schedule'}
        subtitle={
          'Pellentesque in ipsum id orci porta dapibus. Ipsum id orci porta dapibus.'
        }
      />
      <View style={styles.btnCon}>
        <PrimaryButton
          onPressBtn={onPress}
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
      <TitleAlphaHeading title={'Payment Details'} />
      <ServiceFeeBox />
      <TitleAlphaHeading title={'Tracking Details'} />
      <SmallMapCard />
    </View>
  );
};

const styles = StyleSheet.create({
  btnCon: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});
