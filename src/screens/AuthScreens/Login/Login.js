import { StyleSheet, Text, View,ToastAndroid } from 'react-native';
import React, { useEffect } from 'react';
import {
  appIcons,
  colors,
  family,
  loginFormFields,
  LoginVS,
  WP,
} from '../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthFooter,
  AuthHeader,
  AuthHeading,
  Button,
} from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { loginRequest } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = ({ navigation }) => {
  const auth = useSelector(state => state?.auth);
  const { userType } = useSelector(state => state.userType);
  const dispatch = useDispatch();
  const showToastWithGravityAndOffsetFOrSuccess = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Successfully Login',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  const showToastWithGravityAndOffsetFOrError = (err) => {
    ToastAndroid.showWithGravityAndOffset(
      err,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  // useEffect(()=>{
  //   GoogleSignin.configure()
  // },[])
  const googlesingin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    console.log("userinfooo",userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log("error",error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("error",error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("error",error)
      } else {
        console.log("error",error)
      }
    }
  };
  //On Submit Request
  const onSubmitLogin = (values) => {
    const data = new FormData();
    data.append('customer[email]', values.email);
    data.append('customer[password]', values.password);
    const cbSuccess = (res) => {
      showToastWithGravityAndOffsetFOrSuccess();
    }
    const cbFailure = (err) => {
      showToastWithGravityAndOffsetFOrError(err);
      console.log("err+++++", err);
    }
    dispatch(loginRequest(data, cbSuccess, cbFailure))

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
                    onPressBtn={() => {
                      navigation?.navigate('ForgotPassword');
                    }}
                    bgColor={colors.half_white_gradient}
                    width={WP('45')}
                    textColor={colors.p1}
                    btnText={'Forgot Password?'}
                  />
                </View>
              </View>

              <View style={styles.secondContainer}>
                <Button
                 onPressBtn={googlesingin}
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
                <AuthFooter
                  onPress={() => {
                    userType == 'Provider'
                      ? navigation?.navigate('SPSignUp')
                      : navigation.navigate('CSignUp');
                  }}
                  title={'Not yet on Pinoyaya? '}
                  subtitle={'Register'}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default Login;
