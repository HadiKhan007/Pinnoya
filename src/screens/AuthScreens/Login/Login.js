import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  appIcons,
  colors,
  family,
  loginFormFields,
  LoginVS,
  WP,
} from '../../../shared/exporter';
import styles from './styles';
import {AppInput, AuthHeader, AuthHeading, Button} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const Login = ({navigation}) => {
  const onSubmitLogin = () => {
    navigation?.navigate('App');
  };
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
            onSubmitLogin(values);
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
                <AuthHeading
                  title={'Login'}
                  subtitle={'Pellentesque in ipsum id orci porta dapibus.'}
                />
                <AppInput
                  placeholder={'Your Email'}
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
                <AppInput
                  placeholder={'Password'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={() => setFieldTouched('password')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.password}
                  error={errors.password}
                  onSubmitEditing={handleSubmit}
                  secureTextEntry
                />
                <View style={styles.aiRow}>
                  <Button
                    bgColor={colors.b_gradient}
                    width={WP('45')}
                    textColor={colors.white}
                    btnText={'Login'}
                    onPressBtn={handleSubmit}
                  />
                  <Button
                    bgColor={colors.half_white_gradient}
                    width={WP('45')}
                    textColor={colors.p1}
                    btnText={'Forgot Password'}
                  />
                </View>
              </View>

              <View style={styles.secondContainer}>
                <Button
                  bgColor={colors.db_gradient}
                  textColor={colors.b1}
                  btnText={'Login via Google'}
                  img={appIcons.google}
                />
                <Button
                  img={appIcons.facebook}
                  bgColor={colors.b_gradient}
                  textColor={colors.white}
                  btnText={'Login via Facebook'}
                />
                <Button
                  img={appIcons.apple}
                  bgColor={colors.db_gradient}
                  textColor={colors.b1}
                  btnText={'Login via Apple ID'}
                />
                <Text style={styles.footerText}>
                  Not yet on Pinoyaya?{' '}
                  <Text
                    onPress={() => {
                      navigation?.navigate('SignUp');
                    }}
                    style={[
                      styles.footerText,
                      {color: colors.p1, fontFamily: family.Ubuntu_Bold},
                    ]}>
                    Register
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

export default Login;
