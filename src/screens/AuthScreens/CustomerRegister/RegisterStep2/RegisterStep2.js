import React from 'react';
import {View} from 'react-native';
import {
  colors,
  CustomerRegisterStep2Fields,
  CustomerRegisterStep2VS,
} from '../../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthFooter,
  AuthHeader,
  AuthHeading,
  Button,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import UploadIcon from 'react-native-vector-icons/AntDesign';

const RegisterStep2 = ({navigation}) => {
  return (
    <>
      <AuthHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
        headerIcon={true}
        rightArea={true}
        subTitle={'2'}
        text={'of 3'}
      />
      <View style={styles.container}>
        {/* Signup Inputs */}
        <Formik
          initialValues={CustomerRegisterStep2Fields}
          onSubmit={values => {}}
          validationSchema={CustomerRegisterStep2VS}>
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
                  title={'Create an account'}
                  subtitle={'Pellentesque in ipsum id orci porta dapibus.'}
                />

                <AppInput
                  placeholder={'First Nmae'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  onBlur={() => setFieldTouched('firstName')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.firstName}
                  error={errors.firstName}
                />
                <AppInput
                  placeholder={'Last Name'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  onBlur={() => setFieldTouched('lastName')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.lastName}
                  error={errors.lastName}
                />
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

                <AppInput
                  placeholder={'Phone Number'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  onBlur={() => setFieldTouched('phone')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.phone}
                  error={errors.phone}
                />

                <AppInput
                  placeholder={'Upload Your National ID'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('govtID')}
                  value={values.govtID}
                  onBlur={() => setFieldTouched('govtID')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.govtID}
                  error={errors.govtID}
                  rightIcon={() => (
                    <UploadIcon name={'upload'} size={20} color={colors.g2} />
                  )}
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
                />
                <View style={styles.buttonContainer}>
                  <Button
                    onPressBtn={() => {
                      navigation?.navigate('ForgotVerifyOtp');
                    }}
                    bgColor={colors.b_gradient}
                    textColor={colors.white}
                    btnText={'Next'}
                  />
                  <AuthFooter
                    subtitle={'Login '}
                    title={'Already have an account? '}
                    onPress={() => {
                      navigation?.navigate('Login');
                    }}
                  />
                </View>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default RegisterStep2;
