import React, {useState} from 'react';
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
  Checkbox,
  SmallButton,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
const AddPersonalInfo = ({navigation}) => {
  const [checked, setchecked] = useState(false);
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
                <View style={styles.aiFlexEnd}>
                  <SmallButton title={'Add More Kid'} />
                </View>
                <View style={styles.boxContainer}>
                  <AppInput
                    placeholder={'Kid Name'}
                    placeholderTextColor={colors.g2}
                  />
                  <AppInput
                    placeholder={'Kid Age'}
                    placeholderTextColor={colors.g2}
                  />
                  <Checkbox
                    checkSize={14}
                    toggleCheckBox={checked}
                    setToggleCheckBox={() => {
                      setchecked(!checked);
                    }}
                    title={
                      'If child with special needs or PWD Person With Disability'
                    }
                  />
                </View>
                <View style={styles.aiFlexEnd}>
                  <SmallButton title={'Add More Pet'} />
                </View>
                <View style={styles.boxContainer}>
                  <AppInput
                    placeholder={'Pets (Optional)'}
                    placeholderTextColor={colors.g2}
                  />
                </View>
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
