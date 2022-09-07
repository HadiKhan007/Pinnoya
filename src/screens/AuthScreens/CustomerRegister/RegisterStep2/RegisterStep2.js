import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
import { signUpRequest } from '../../../../redux/actions/auth-actions/auth-action';
import { useDispatch } from 'react-redux';
const RegisterStep2 = ({navigation,route}) => {
  const dispatch = useDispatch();
  const item = route?.params?.item
  
  // console.log("dataaaa",data)

const handleSubmit=(values)=>{
  var data = new FormData();
data.append('customer[email]', values.email);
data.append('customer[password]', values.password);
data.append('customer[password_confirmation]', '');
data.append('customer[first_name]', values.firstName);
data.append('customer[last_name]', values.lastName);
data.append('customer[phone_number]', values.phone);
data.append('customer[govt_id]', values.govtID);
data.append('customer[address]', item.address);
data.append('customer[street]', item.street);
data.append('customer[post_code]', item.postCode);
data.append('customer[province]', item.province);
data.append('customer[barangay]', item.barangay);
data.append('customer[city]', item.city);
data.append('customer[country]', item.country);
const cbSuccess = (res) => {
 console.log("response",res)
}
const cbFailure = (err) => {
  console.log("err+++++", err);
}
dispatch(signUpRequest(data, cbSuccess, cbFailure))
}

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
          onSubmit={values=>handleSubmit(values)}
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
                  placeholder={'Your National ID'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('govtID')}
                  value={values.govtID}
                  onBlur={() => setFieldTouched('govtID')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.govtID}
                  error={errors.govtID}
                  // rightIcon={}
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
                    onPressBtn={handleSubmit}
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
