import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
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
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const AddPersonalInfo = ({navigation}) => {
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
        {/* Signup Inputs */}
        <Formik
          initialValues={CustomerRegisterStep1Fields}
          onSubmit={values => {}}
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
                  title={'Personal Information'}
                  subtitle={'Put information to get best experience'}
                />

                <View style={styles.buttonContainer}>
                  <Button
                    onPressBtn={() => {
                      navigation?.navigate('App');
                    }}
                    bgColor={colors.b_gradient}
                    textColor={colors.white}
                    btnText={'Submit'}
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

export default AddPersonalInfo;
