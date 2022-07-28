import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {
  HomeHeader,
  AppInput,
  Button,
} from '../../../../components';
import {
  appIcons,
  spacing,
  colors,
  CustomerRegisterStep1Fields,
  CustomerRegisterStep1VS,
} from '../../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Formik} from 'formik';
const FullTimeService = ({navigation}) => {
  const tabref = useRef(null);
  const [openModal, setopenModal] = useState(false);
  return (
    <>
      <HomeHeader
        title={'Hello Alice.'}
        subtitle={'What service do you need?'}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
            Choose part-time or full-services
          </Text>
        </View>
        <View style={styles.secondContentContainer}>
          <Text style={styles.subtitle}>Full Time Service</Text>
          <Formik
            initialValues={CustomerRegisterStep1Fields}
            onSubmit={values => {
              onSubmitLogin(values);
            }}
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
                <AppInput
                  placeholder={'Your Address'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('address')}
                  value={values.address}
                  onBlur={() => setFieldTouched('address')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.address}
                  error={errors.address}
                />
                <AppInput
                  placeholder={'Your street'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('street')}
                  value={values.street}
                  onBlur={() => setFieldTouched('street')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.street}
                  error={errors.street}
                  onSubmitEditing={handleSubmit}
                />
                <AppInput
                  placeholder={'Your postCode'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('postCode')}
                  value={values.postCode}
                  onBlur={() => setFieldTouched('postCode')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.postCode}
                  error={errors.postCode}
                  onSubmitEditing={handleSubmit}
                />
                <AppInput
                  placeholder={'Your province'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('province')}
                  value={values.province}
                  onBlur={() => setFieldTouched('province')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.province}
                  error={errors.province}
                  onSubmitEditing={handleSubmit}
                />
                <AppInput
                  placeholder={'Your barangay'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('barangay')}
                  value={values.barangay}
                  onBlur={() => setFieldTouched('barangay')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.barangay}
                  error={errors.barangay}
                  onSubmitEditing={handleSubmit}
                />
                <AppInput
                  placeholder={'Your city'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('city')}
                  value={values.city}
                  onBlur={() => setFieldTouched('city')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.city}
                  error={errors.city}
                  onSubmitEditing={handleSubmit}
                />
                <AppInput
                  placeholder={'Your country'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('country')}
                  value={values.country}
                  onBlur={() => setFieldTouched('country')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.country}
                  error={errors.country}
                  onSubmitEditing={handleSubmit}
                />
                <View style={styles.buttonContainer}>
                  <Button
                    tabRef={tabref}
                    onPressBtn={() => {
                      tabref.current.open();
                    }}
                    bgColor={colors.b_gradient}
                    textColor={colors.white}
                    btnText={'Submit'}
                  />
                </View>
              </KeyboardAwareScrollView>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
};
export default FullTimeService;
