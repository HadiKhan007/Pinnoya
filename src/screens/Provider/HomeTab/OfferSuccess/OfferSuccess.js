import React from 'react';
import {View, Image} from 'react-native';
import {colors, WP, appImages} from '../../../../shared/exporter';
import {AuthHeader, AuthHeading, Button} from '../../../../components';
import styles from './styles';
const OfferSuccess = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image source={appImages.pana4} style={styles.pana} />
          <AuthHeading
            title={'Offer Successfull'}
            subtitle={'Congratualtions. Your offer was successful'}
            width={300}
            marginLeft={100}
            margin={70}
            numberOfLines={1}
          />
          <Button
            bgColor={colors.b_gradient}
            width={WP('93')}
            textColor={colors.white}
            btnText={'Open jobs'}
            onPressBtn={() => {
              navigation?.replace('History');
            }}
          />
          <Button
            bgColor={colors.db_gradient}
            width={WP('93')}
            textColor={colors.p1}
            btnText={'Back to Home'}
            onPressBtn={() => {
              navigation?.replace('Dashboard');
            }}
          />
        </View>
      </View>
    </>
  );
};
export default OfferSuccess;
