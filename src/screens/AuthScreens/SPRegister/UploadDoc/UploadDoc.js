import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  colors,
  SPRegisterStep3Fields,
  SPRegisterStep3VS,
  image_options,
} from '../../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthHeader,
  AuthHeading,
  Button,
  ImagePickerModal,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import UploadIcon from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const UploadDoc = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [govtIdImage, setgovtIdImage] = useState('');
  const [vaccinationImage, setvaccinationImage] = useState('');
  const [selectedType, setselectedType] = useState(null);
  const formikRef = useRef();

  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchImageLibrary(image_options, response => {
          console.log('Response', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            console.log('Response---', response.assets[0].uri);
            formikRef?.current.setFieldValue('govtID', response.assets[0].uri);
            if (selectedType == 'GovtId')
              setgovtIdImage(response.assets[0].uri);
            else if (selectedType == 'Vaccination') {
              setvaccinationImage(response.assets[0].uri);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, 400);
  };
  //Open Camera
  const showCamera = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchCamera(image_options, response => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            if (response.assets) {
              formikRef?.current.setFieldValue(
                'govtID',
                response.assets[0].uri,
              );
              if (selectedType == 'GovtId')
                setgovtIdImage(response.assets[0].uri);
              else if (selectedType == 'Vaccination') {
                setvaccinationImage(response.assets[0].uri);
              }
            } else {
              alert('Unable to open Camera');
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, 400);
  };

  return (
    <>
      <AuthHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
        headerIcon={true}
        rightArea={true}
        subTitle={'3'}
        text={'of 4'}
      />
      <View style={styles.container}>
        {/* Signup Inputs */}
        <Formik
          innerRef={formikRef}
          initialValues={SPRegisterStep3Fields}
          onSubmit={values => {
            navigation?.navigate('SPVerifyOtp');
          }}
          validationSchema={SPRegisterStep3VS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
            setFieldValue,
          }) => (
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.contentContainer}>
                <AuthHeading title={'Upload Documents'} />
                <AppInput
                  placeholder={'Per Hour Rate'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('hourly_rate')}
                  value={values.hourly_rate}
                  onBlur={() => setFieldTouched('hourly_rate')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.hourly_rate}
                  error={errors.hourly_rate}
                />
                <AppInput
                  editable={false}
                  placeholder={'Govt ID'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('sp_doc')}
                  value={values.sp_doc_id}
                  onBlur={() => setFieldTouched('sp_doc_id')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.sp_doc_id}
                  error={errors.sp_doc_id}
                  rightIcon={() => (
                    <UploadIcon
                      onPress={() => {
                        setShow(true), setselectedType('GovtId');
                      }}
                      name={'upload'}
                      size={20}
                      color={colors.g2}
                    />
                  )}
                />
                <AppInput
                  editable={false}
                  placeholder={'Vaccination'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('sp_doc')}
                  value={values.sp_doc}
                  onBlur={() => setFieldTouched('sp_doc')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.sp_doc}
                  error={errors.sp_doc}
                  rightIcon={() => (
                    <UploadIcon
                      onPress={() => {
                        {
                          setShow(true), setselectedType('Vaccination');
                        }
                      }}
                      name={'upload'}
                      size={20}
                      color={colors.g2}
                    />
                  )}
                />
                <Button
                  onPressBtn={handleSubmit}
                  bgColor={colors.b_gradient}
                  textColor={colors.white}
                  btnText={'Next'}
                />
                <Button
                  onPressBtn={() => {
                    navigation?.navigate('App');
                  }}
                  bgColor={colors.db_gradient}
                  textColor={colors.b1}
                  btnText={'Skip'}
                />
                <ImagePickerModal
                  show={show}
                  onPressHide={() => setShow(false)}
                  onPressCamera={() => showCamera()}
                  onPressGallery={() => showGallery()}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default UploadDoc;
