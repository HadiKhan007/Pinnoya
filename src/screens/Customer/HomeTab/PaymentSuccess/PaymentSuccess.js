import React from 'react';
import {View, Image} from 'react-native';
import {
  appIcons,
  colors,
  family,
  WP,
  appImages,
} from '../../../../shared/exporter';
import {AuthHeading, Button} from '../../../../components';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

const PaymentSuccess = ({navigation}) => {
  const {userType} = useSelector(state => state.userType);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={appImages.pana3} style={styles.imgStyle} />
        <AuthHeading
          title={'Payment Successfull!'}
          subtitle={
            'Your payment was succsessful! You can now continue using Pinoyaya.'
          }
          width={300}
          marginLeft={90}
          margin={35}
          numberOfLines={1}
        />
        <Button
          bgColor={colors.b_gradient}
          width={WP('93')}
          textColor={colors.white}
          btnText={'Bookings'}
          onPressBtn={() => {
            navigation?.replace('TransactionHistory');
          }}
        />
        <Button
          bgColor={colors.db_gradient}
          width={WP('93')}
          textColor={colors.p1}
          btnText={'Back to Home'}
          onPressBtn={() => {
            navigation?.replace(
              userType === 'Provider' ? 'SPDashboard' : 'Dashboard',
            );
          }}
        />
      </View>
    </View>
  );
};
export default PaymentSuccess;
