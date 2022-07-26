import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomButton, CustomHeader} from '../../../../components';
import {
  appIcons,
  colors,
  profile_uri,
  spacing,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';
const CallNow = ({navigation}) => {
  return (
    <>
      <CustomHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
        onPressCall={() => {
          navigation?.navigate('CallNow');
        }}
        rightIcon={<Image style={styles.imgStyle} source={appIcons.sms} />}
        height={WP('25')}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          {/* <Text>CallNow</Text> */}
        </View>
        <View style={styles.secondContentContainer}>
          <Text style={styles.h1}>Irene foks</Text>
          <View style={styles.btnCon}>
            <Text style={styles.btnText}>8m 10s</Text>
          </View>
          <View style={styles.aiRow}>
            <View style={spacing.mx6}>
              <CustomButton
                width={90}
                bgColor={colors.b_gradient}
                img={appIcons.vol}
              />
            </View>
            <View style={spacing.mx6}>
              <CustomButton
                width={90}
                bgColor={colors.mb_gradient}
                img={appIcons.mic}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CallNow;
