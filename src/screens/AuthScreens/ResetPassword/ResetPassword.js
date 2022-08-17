import {View} from 'react-native';
import React from 'react';
import {
  WP,
  colors,
  resetFormFields,
  ResetPasswordVS,
} from '../../../shared/exporter';
import {Formik} from 'formik';
import {
  AuthHeader,
  AuthHeading,
  AppInput,
  Button,
  AuthFooter,
} from '../../../components';
import {resetPassRequest} from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
const ResetPassword = ({navigation}) => {
  const auth = useSelector(state => state?.auth);
  const dispatch = useDispatch();
  const onSubmitReset = () => {
    const body = {
      password: '',
      confirmPassword: '',
    };
    dispatch(resetPassRequest(body));
    navigation?.navigate('ResetPasswordSuccess');
  };
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
        <Formik
          initialValues={resetFormFields}
          onSubmit={value => {
            onSubmitReset(value);
          }}
          validationSchema={ResetPasswordVS}>
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
                  title={'Reset your password'}
                  subtitle={'Pellentesque in ipsum id orci porta dapibus.'}
                />
                <AppInput
                  placeholder={'Enter a new password'}
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
                <AppInput
                  placeholder={'Enter a new password'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  onBlur={() => setFieldTouched('confirmPassword')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.confirmPassword}
                  error={errors.confirmPassword}
                />
                <View style={styles.aiRow}>
                  <Button
                    bgColor={colors.b_gradient}
                    width={WP('93')}
                    textColor={colors.white}
                    btnText={'Submit'}
                    onPressBtn={handleSubmit}
                  />
                  <AuthFooter
                    title={'Already reset?'}
                    subtitle={'Login'}
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

export default ResetPassword;
