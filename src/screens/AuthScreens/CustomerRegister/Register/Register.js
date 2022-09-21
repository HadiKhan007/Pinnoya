import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {
  appImages,
  colors,
  CustomerRegisterStep1Fields,
  CustomerRegisterStep1VS,
} from '../../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthFooter,
  AuthHeader,
  AuthHeading,
  Button,
  LocationModal,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const Register = ({navigation}) => {
  // const [data, setdata] = useState('')
  const locationBSheetRef = useRef(null);
  const onRegisterStep1Hanlder = () => {
    locationBSheetRef.current.open();
  };
  const handleSubmit = values => {
    // setdata(values)
    navigation.navigate('CSignUp2', {
      item: values,
    });
    // console.log("valiuiiii",values)
  };
  // console.log("first+++++++===++++++++++++++++++++++++++++++++++++++++====",data)

  return (
    <>
      <AuthHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
        headerIcon={true}
        rightArea={true}
        subTitle={'1'}
        text={'of 3'}
      />
      <View style={styles.container}>
        {/* Signup Inputs */}
        <Formik
          initialValues={CustomerRegisterStep1Fields}
          onSubmit={handleSubmit}
          validationSchema={CustomerRegisterStep1VS}>
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
                  placeholder={'Your Address'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('address')}
                  value={values.address}
                  onBlur={() => setFieldTouched('address')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.address}
                  error={errors.address}
                />
                <AppInput
                  placeholder={'Your Street'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('street')}
                  value={values.street}
                  onBlur={() => setFieldTouched('street')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.street}
                  error={errors.street}
                />
                <AppInput
                  placeholder={'Your Post Code'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('postCode')}
                  value={values.postCode}
                  onBlur={() => setFieldTouched('postCode')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.postCode}
                  error={errors.postCode}
                />

                <AppInput
                  placeholder={'Your Province'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('province')}
                  value={values.province}
                  onBlur={() => setFieldTouched('province')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.province}
                  error={errors.province}
                />

                <AppInput
                  placeholder={'Your Barangay'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('barangay')}
                  value={values.barangay}
                  onBlur={() => setFieldTouched('barangay')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.barangay}
                  error={errors.barangay}
                />
                <AppInput
                  placeholder={'Your City'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('city')}
                  value={values.city}
                  onBlur={() => setFieldTouched('city')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.city}
                  error={errors.city}
                />
                <AppInput
                  placeholder={'Your Country'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('country')}
                  value={values.country}
                  onBlur={() => setFieldTouched('country')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.country}
                  error={errors.country}
                  onSubmitEditing={handleSubmit}
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

export default Register;
