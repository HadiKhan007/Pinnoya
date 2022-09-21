import {View, Alert} from 'react-native';
import React, {useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {resetPassRequest, resetPasswordAction} from '../../../redux/actions';
const ResetPassword = ({navigation, route}) => {
  const auth = useSelector(state => state?.auth);
  const [userType, setuserType] = useState(route?.params?.userType);
  const [userId, setuserId] = useState(route?.params?.userId);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const onSubmitReset = () => {
    const body = {
      password: '',
      confirmPassword: '',
    };
    dispatch(resetPassRequest(body));
    navigation?.navigate('ResetPasswordSuccess');
  };

  const handleResetPassword = values => {
    setLoading(true);
    console.log('OK. restet');

    try {
      const data = new FormData();
      data.append(
        'type',
        userType == 'Customer' ? 'customer' : 'service_provider',
      );
      data.append('password', values.password);
      data.append('id', userId);

      const cbSuccess = res => {
        console.log('verify resetPassword RESPONSE sc==> ', res);
        setLoading(false);
        navigation.replace('ResetPasswordSuccess');
      };
      const cbFailure = err => {
        console.log('err cbfail', err);
        Alert.alert(err);
        setLoading(false);
      };
      console.log('[DATA]===>  ', data);
      dispatch(resetPasswordAction(data, cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
      console.log('err catch', err);
    }
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
            handleResetPassword(value);
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
