import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  appIcons,
  colors,
  family,
  loginFormFields,
  LoginVS,
  spacing,
  WP,
} from '../../../shared/exporter';
import styles from './styles';
import {AppInput, AuthHeader, AuthHeading, Button} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const ForgotPassword = ({navigation}) => {
  return (
    <>
      <AuthHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
        headerIcon={true}
      />
      <View style={styles.container}>
        {/* Login Inputs */}
        <Formik
          initialValues={loginFormFields}
          onSubmit={values => {
            console.log(values);
          }}
          validationSchema={LoginVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
          }) => (
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.contentContainer}>
                <AuthHeading title={'Forgot Password?'} />
                <AppInput
                  placeholder={'Email Address'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={() => setFieldTouched('email')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.email}
                  error={errors.email}
                />
                <View style={spacing.my4}>
                  <Button
                    onPressBtn={handleSubmit}
                    bgColor={colors.b_gradient}
                    textColor={colors.white}
                    btnText={'Enter'}
                  />
                </View>
                <Text
                  onPress={() => {
                    navigation?.navigate('Login');
                  }}
                  style={styles.footerText}>
                  Already reset?{' '}
                  <Text
                    onPress={() => {
                      navigation?.navigate('Login');
                    }}
                    style={[
                      styles.footerText,
                      {color: colors.p1, fontFamily: family.Ubuntu_Bold},
                    ]}>
                    Login
                  </Text>
                </Text>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default ForgotPassword;
