import {StyleSheet, Text, View, ToastAndroid, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  appIcons,
  colors,
  ENDPOINTS,
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AppLoader} from '../../../components';
import * as types from '../../../redux/actions/types';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest, providerLoginRequest} from '../../../redux/actions';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  // redux stuff
  const dispatch = useDispatch();
  const auth = useSelector(state => state?.auth);
  const {userType} = useSelector(state => state.userType);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const googlesingin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userinfooo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error', error);
      } else {
        console.log('error', error);
      }
    }
  };
  //On Submit Request
  const onSubmitLogin = values => {
    try {
      const data = new FormData();
      setLoading(true);
      data.append('customer[email]', values.email);
      data.append('customer[password]', values.password);

      const cbSuccess = res => {
        if (res) {
          setLoading(false);
          // alert('Login Sucessfuly');
          dispatch({type: types.USER_TYPE_REQUEST, params: 'Customer'});
          navigation.replace('App', {screen: 'Dashboard'});
        }
      };
      const cbFailure = err => {
        console.log('1', err);
        alert(err);
        setLoading(false);
      };
      dispatch(loginRequest(data, cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
      // Alert.alert('Something went wrong.');
    }
  };

  const onSubmitProviderLogin = values => {
    try {
      const data = new FormData();
      setLoading(true);
      data.append('service_provider[email]', values.email);
      data.append('service_provider[password]', values.password);
      const cbSuccess = res => {
        setLoading(false);
        alert('Provider Login Sucessfuly');
        dispatch({type: 'USER_TYPE_REQUEST', params: 'Provider'});
      };
      const cbFailure = err => {
        Alert.alert('Sorry', 'Invalid Credentials.');
        setLoading(false);
      };
      dispatch(providerLoginRequest(data, cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
    }
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
            userType == 'Customer'
              ? onSubmitLogin(values)
              : onSubmitProviderLogin(values);
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
                  //  value={'testing12@example.com'}
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
                  //value={'1234567899'}
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
                    Loading={loading}
                    bgColor={colors.b_gradient}
                    width={WP('45')}
                    textColor={colors.white}
                    btnText={'Login'}
                    onPressBtn={handleSubmit}
                  />
                  <Button
                    onPressBtn={() => {
                      navigation?.navigate('ForgotPassword', {
                        userType: userType,
                      });
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
