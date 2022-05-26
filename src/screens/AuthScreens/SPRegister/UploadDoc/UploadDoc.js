import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  colors,
  SPRegisterStep3Fields,
  SPRegisterStep3VS,
} from '../../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthHeader,
  AuthHeading,
  Button,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const UploadDoc = ({navigation}) => {
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
          initialValues={SPRegisterStep3Fields}
          onSubmit={values => {
            navigation?.navigate('App');
          }}
          validationSchema={SPRegisterStep3VS}>
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
                <AuthHeading title={'Upload Documents'} />
                <AppInput
                  placeholder={'Per Hour Rate'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('hourly_rate')}
                  value={values.hourly_rate}
                  onBlur={() => setFieldTouched('hourly_rate')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.hourly_rate}
                  error={errors.hourly_rate}
                />
                <AppInput
                  editable={false}
                  placeholder={'Upload ID'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('sp_doc')}
                  value={values.sp_doc_id}
                  onBlur={() => setFieldTouched('sp_doc_id')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.sp_doc_id}
                  error={errors.sp_doc_id}
                  rightIcon={true}
                />
                <AppInput
                  editable={false}
                  placeholder={'Upload Other Document'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('sp_doc')}
                  value={values.sp_doc}
                  onBlur={() => setFieldTouched('sp_doc')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.sp_doc}
                  error={errors.sp_doc}
                  rightIcon={true}
                />
                <Button
                  onPressBtn={handleSubmit}
                  bgColor={colors.b_gradient}
                  textColor={colors.white}
                  btnText={'Next'}
                />
                <Button
                  onPressBtn={() => {
                    navigation?.navigate('App');
                  }}
                  bgColor={colors.db_gradient}
                  textColor={colors.b1}
                  btnText={'Skip'}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default UploadDoc;
