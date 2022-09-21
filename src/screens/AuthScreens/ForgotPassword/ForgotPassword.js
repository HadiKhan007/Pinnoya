import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  colors,
  forgotFormFields,
  ForgotPasswordVS,
  spacing,
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
import CountDown from 'react-native-countdown-component';
import {forgotPasswordRequest} from '../../../redux/actions';
import {useDispatch} from 'react-redux';

const ForgotPassword = ({navigation, route}) => {
  const [resend, setResend] = useState(false);
  const [timerCount, setTimer] = useState(60);
  const [userType, setuserType] = useState(route?.params?.userType);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // const onPressLogin = e => {
  //   navigation.replace('VerifyOtp', {userType: userType});
  // };
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleForgotPassword = values => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append(
        'type',
        userType == 'Customer' ? 'customer' : 'service_provider',
      );
      data.append('email', values.email);

      const cbSuccess = res => {
        console.log('FORGOT PASSWORD ', res);
        setLoading(false);
        navigation.replace('VerifyOtp', {
          userType: userType,
          userId: res?.data?.id,
        });
      };
      const cbFailure = err => {
        console.log('err cbfail', err);
        Alert.alert(err);
        setLoading(false);
      };
      console.log('FORGOT PASSWORD ==> ', data);
      dispatch(forgotPasswordRequest(data, cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
      console.log('err catch', err);
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
        <Formik
          initialValues={forgotFormFields}
          onSubmit={values => {
            handleForgotPassword(values);
          }}
          validationSchema={ForgotPasswordVS}>
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
                  title={'Forgot Password?'}
                  subtitle={
                    'Please enter the email address you registered with below and we’ll send you a verification code...'
                  }
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
                {resend ? (
                  <TouchableOpacity
                    style={[
                      spacing.my4,
                      {flexDirection: 'row'},
                      {justifyContent: 'center'},
                    ]}>
                    <Text style={styles.resTxt}>Resend code in </Text>
                    <CountDown
                      style={styles.count}
                      until={timerCount}
                      digitStyle={{
                        marginVertical: WP(-3),
                      }}
                      digitTxtStyle={{color: colors.p1}}
                      timeToShow={['S']}
                      timeLabels={{s: null}}
                      size={13}
                      showSeparator={false}
                      onFinish={() => setResend(false)}
                    />

                    <Text style={styles.resTxt}>sec...</Text>
                  </TouchableOpacity>
                ) : (
                  <Text
                    style={[
                      styles.resTxt,
                      {paddingHorizontal: WP('34')},
                      {paddingTop: WP('5')},
                    ]}
                    onPress={() => setResend(true)}>
                    Resend code
                  </Text>
                )}
                <View style={spacing.my3}>
                  <Button
                    onPressBtn={handleSubmit}
                    bgColor={colors.b_gradient}
                    textColor={colors.white}
                    btnText={'Enter'}
                    Loading={loading}
                  />
                </View>
                <AuthFooter
                  onPress={() => {
                    navigation?.navigate('Login');
                  }}
                  subtitle={'Login'}
                  title={'Already reset? '}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default ForgotPassword;
