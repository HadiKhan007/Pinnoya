import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {AppHeader} from '../../../../components';
import {appIcons, appImages} from '../../../../shared/exporter';
import styles from './styles';
const PaymentInfo = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'Payment Information'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.secondContainer}>
            <Text style={styles.titleText}>Lorem ipsum dolor</Text>
            <TouchableOpacity>
              <Image source={appIcons.added} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>

          <Text style={styles.subTitleText}>
            Pellentesque in ipsum id orci porta dapibus.
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <Image source={appImages.card} style={styles.card} />
          <Image source={appImages.card2} style={styles.card} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PaymentInfo;
