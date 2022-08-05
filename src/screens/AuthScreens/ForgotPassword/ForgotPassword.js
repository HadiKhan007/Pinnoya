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
const ForgotPassword = ({navigation}) => {
  const [resend, setResend] = useState(false);
  const [timerCount, setTimer] = useState(60);
  const onPressLogin = e => {
    navigation.replace('VerifyOtp');
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
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
          initialValues={forgotFormFields}
          onSubmit={values => {
            console.log(values);
            onPressLogin(values);
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
                      style={{
                        width: WP(5),
                        flexDirection: 'row',
                      }}
                      until={timerCount}
                      digitStyle={{
                        marginVertical: WP(-2),
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
