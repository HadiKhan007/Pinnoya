import React, {useState, useRef} from 'react';
import {TouchableOpacity, View, ToastAndroid} from 'react-native';
import {
  colors,
  CustomerRegisterStep2Fields,
  CustomerRegisterStep2VS,
  image_options,
} from '../../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthFooter,
  AuthHeader,
  AuthHeading,
  Button,
  ImagePickerModal,
  AppLoader,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {signUpRequest} from '../../../../redux/actions/auth-actions/auth-action';
import {useDispatch} from 'react-redux';
import UploadIcon from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const RegisterStep2 = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [openModal, setModal] = useState(false);
  const [Image, setImage] = useState('');
  const [Data, setData] = useState('');
  const dispatch = useDispatch();
  const item = route?.params?.item;
  const formikRef = useRef();

  const handleSubmit = values => {
    var data = new FormData();
    setLoading(true);
    data.append('customer[email]', values.email);
    data.append('customer[password]', values.password);
    data.append('customer[password_confirmation]', values.password);
    data.append('customer[first_name]', values.firstName);
    data.append('customer[last_name]', values.lastName);
    data.append('customer[phone_number]', values.phone);
    data.append('customer[govt_id]', {
      name: Image.fileName,
      type: Image.type,
      uri: Image.uri,
    });
    data.append('customer[address]', item.address);
    data.append('customer[street]', item.street);
    data.append('customer[post_code]', item.postCode);
    data.append('customer[province]', item.province);
    data.append('customer[barangay]', item.barangay);
    data.append('customer[city]', item.city);
    data.append('customer[country]', item.country);
    const cbSuccess = res => {
      setLoading(false);
      navigation.replace('SignUpVerifyOtp', {
        userId: res?.data?.data?.id,
        userType: 'Customer',
      });
    };
    const cbFailure = err => {
      setLoading(false);
      console.log('err+++++', err);
    };
    dispatch(signUpRequest(data, cbSuccess, cbFailure));
  };

  //Handlers
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
            console.log('Response---', response.assets[0]);
            formikRef?.current.setFieldValue('govtID', response.assets[0].uri);
            setImage(response.assets[0]);
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
              setImage(response.assets[0]);
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
        subTitle={'2'}
        text={'of 3'}
      />
      <View style={styles.container}>
        {/* Signup Inputs */}
        <Formik
          innerRef={formikRef}
          initialValues={CustomerRegisterStep2Fields}
          onSubmit={values => handleSubmit(values)}
          validationSchema={CustomerRegisterStep2VS}>
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
                <AuthHeading
                  title={'Create an account'}
                  subtitle={'Pellentesque in ipsum id orci porta dapibus.'}
                />

                <AppInput
                  placeholder={'First Nmae'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  onBlur={() => setFieldTouched('firstName')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.firstName}
                  error={errors.firstName}
                />
                <AppInput
                  placeholder={'Last Name'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  onBlur={() => setFieldTouched('lastName')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.lastName}
                  error={errors.lastName}
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

                <AppInput
                  placeholder={'Phone Number'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  onBlur={() => setFieldTouched('phone')}
                  keyboardType="number-pad"
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.phone}
                  error={errors.phone}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShow(true);
                  }}>
                  <AppInput
                    placeholder={'Upload Your National ID'}
                    placeholderTextColor={colors.g2}
                    onChangeText={handleChange('govtID')}
                    value={values.govtID}
                    onBlur={() => setFieldValue('govtID')}
                    blurOnSubmit={false}
                    editable={false}
                    disableFullscreenUI={true}
                    autoCapitalize="none"
                    touched={touched.govtID}
                    error={errors.govtID}
                    rightIcon={() => (
                      <UploadIcon name={'upload'} size={20} color={colors.g2} />
                    )}
                    onPressIn={() => {
                      setShow(true);
                    }}
                  />
                </TouchableOpacity>
                <AppInput
                  placeholder={'Password'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={() => setFieldTouched('password')}
                  secureTextEntry={true}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.password}
                  error={errors.password}
                />
                <View style={styles.buttonContainer}>
                  <Button
                    Loading={loading}
                    onPressBtn={handleSubmit}
                    bgColor={colors.b_gradient}
                    textColor={colors.white}
                    btnText={'Next'}
                  />
                  <AuthFooter
                    subtitle={'Login '}
                    title={'Already have an account? '}
                    onPress={() => {
                      navigation?.navigate('Login');
                    }}
                  />
                  <ImagePickerModal
                    show={show}
                    onPressHide={() => setShow(false)}
                    onPressCamera={() => showCamera(setFieldValue)}
                    onPressGallery={() => showGallery(setFieldValue)}
                  />
                  <AppLoader />
                </View>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </>
  );
};

export default RegisterStep2;
