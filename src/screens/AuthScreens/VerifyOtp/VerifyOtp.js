import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {AuthHeader, AuthHeading, Button} from '../../../components';
import styles from './styles';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors, WP, spacing} from '../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountDown from 'react-native-countdown-component';
import {useDispatch} from 'react-redux';
import {verifyOTPRequest} from '../../../redux/actions';
const VerifyOtp = ({navigation, route}) => {
  const [resend, setResend] = useState(false);
  const [value, setValue] = useState('');
  const [timerCount, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [userType, setuserType] = useState(route?.params?.userType);
  const [userId, setuserId] = useState(route?.params?.userId);

  const dispatch = useDispatch();
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useRef();
  useEffect(() => {
    console.log('verifyotp userId==>', userId);
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerifyOtp = () => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append(
        'type',
        userType == 'Customer' ? 'customer' : 'service_provider',
      );
      data.append('token', value);

      const cbSuccess = res => {
        console.log('verify otp RESPONSE sc==> ', res);
        if (res?.message) {
          setLoading(false);
          navigation.replace('ResetPassword', {
            userType: userType,
            userId: userId,
          });
        }
      };
      const cbFailure = err => {
        console.log('err cbfail', err);
        Alert.alert(err);
        setLoading(false);
      };
      dispatch(verifyOTPRequest(data, cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
      console.log('err catch', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        onPressBack={() => {
          navigation?.goBack();
        }}
        backIcon={true}
        headerIcon={true}
        rightArea={true}
      />
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <AuthHeading
            title={'Verify Otp'}
            subtitle={'Pellentesque in ipsum id orci porta dapibus.'}
          />
          <View>
            <CodeField
              ref={ref}
              {...codeFieldProps}
              value={value}
              onChangeText={val => {
                setValue(val);
                if (val.length == 6) {
                }
              }}
              cellCount={6}
              onSubmitEditing={() => {}}
              rootStyle={styles.otpInputBox}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  key={index}
                  style={[
                    styles.cell,
                    {borderColor: isFocused ? colors.p1 : colors.g7},
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  <Text style={styles.txtStyle}>{symbol}</Text>
                </View>
              )}
            />
          </View>
          <View>
            {resend ? (
              <TouchableOpacity
                style={[
                  spacing.my4,
                  {flexDirection: 'row', justifyContent: 'center'},
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
                  {
                    paddingHorizontal: WP('34'),
                    paddingVertical: WP('5'),
                  },
                ]}
                onPress={() => setResend(true)}>
                Resend code
              </Text>
            )}
            <Button
              onPressBtn={() => {
                // navigation?.navigate('ResetPassword');
                handleVerifyOtp();
              }}
              bgColor={colors.b_gradient}
              textColor={colors.white}
              btnText={'Confirm'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOtp;
