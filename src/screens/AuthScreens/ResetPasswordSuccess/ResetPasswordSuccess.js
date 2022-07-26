import React from 'react';
import {View, Text} from 'react-native';
import {appIcons, colors, family, WP} from '../../../shared/exporter';
import {AuthHeader, AuthHeading, Button} from '../../../components';
import styles from './styles';
const ResetPasswordSuccess = ({navigation}) => {
  return (
    <>
      <AuthHeader
        backIcon={true}
        headerIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <AuthHeading
            title={'Your password was changed successfully'}
            subtitle={'Please visit our login page to sign in.'}
            maxWidth={300}
          />
          <Button
            bgColor={colors.b_gradient}
            width={WP('93')}
            textColor={colors.white}
            btnText={'Go to Login'}
            onPressBtn={() => {
              navigation?.replace('Login');
            }}
          />
        </View>
      </View>
    </>
  );
};
export default ResetPasswordSuccess;
