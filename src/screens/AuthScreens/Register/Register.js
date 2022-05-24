import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, signupFormFields1, SignUpVS1} from '../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthFooter,
  AuthHeader,
  AuthHeading,
  Button,
} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const Register = ({navigation}) => {
  return (
    <>
      <AuthHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
        headerIcon={true}
        rightArea={true}
      />
      <View style={styles.container}>
        {/* Signup Inputs */}
        <Formik
          initialValues={signupFormFields1}
          onSubmit={values => {
            onSubmitLogin(values);
          }}
          validationSchema={SignUpVS1}>
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
                <AuthHeading title={'Create an account'} />
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
