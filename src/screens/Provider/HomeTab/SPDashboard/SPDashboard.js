import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  Button,
  DocumentCard,
  HomeHeader,
  VerificationCard,
} from '../../../../components';
import {colors, serviceList, spacing, WP} from '../../../../shared/exporter';
import styles from './styles';
const SPDashboard = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <HomeHeader title={'Hello Alice,'} subtitle={'What job do you need?'} />
      <View style={styles.btnContainer}>
        <Button
          bgColor={colors.b_gradient}
          width={WP(45)}
          height={WP(12)}
          btnText={'Wallet'}
          textColor={colors.white}
        />
        <Button
          bgColor={colors.b_gradient}
          width={WP(45)}
          height={WP(12)}
          btnText={'History'}
          textColor={colors.white}
        />
      </View>
      <DocumentCard />
      <View
        style={{
          backgroundColor: colors.white,
          flex: 1,
        }}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
            Choose part-time or full-services
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SPDashboard;
