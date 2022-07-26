import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {AuthHeader, AuthHeading, Button} from '../../../components';
import styles from './styles';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors} from '../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const VerifyOtp = ({navigation}) => {
  const [value, setValue] = useState('');
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useRef();

  return (
    <>
      <AuthHeader
        onPressBack={() => {
          navigation?.goBack();
        }}
        backIcon={true}
        headerIcon={true}
        rightArea={true}
        subTitle={'3 of 3'}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <AuthHeading
              title={'Verify Phone'}
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
              <Button
                bgColor={colors.db_gradient}
                textColor={colors.p1}
                btnText={'Resend'}
              />
              <Button
                onPressBtn={() => {
                  navigation?.navigate('AddPersonalInfo');
                }}
                bgColor={colors.b_gradient}
                textColor={colors.white}
                btnText={'Confirm'}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </>
  );
};

export default VerifyOtp;
