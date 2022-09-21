import React, {useState, useEffect, useRef} from 'react';
import {View, Alert} from 'react-native';
import {colors, AddKiddsVS, Addkiddsfield} from '../../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthHeader,
  AuthHeading,
  Button,
  SmallButton,
  AddMoreKid,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import {
  addKidRequest,
  addPetRequest,
} from '../../../../redux/actions/auth-actions/auth-action';

import {Formik} from 'formik';
import {text} from 'stream/consumers';
const AddPersonalInfo = ({navigation, route}) => {
  const [kidName, setkidName] = useState('');
  const [kidAge, setKidAge] = useState('');
  const [petName, setpetName] = useState('');
  const [petBreed, setpetBreed] = useState('');
  const dispatch = useDispatch();
  const [token, settoken] = useState(route?.params?.token);
  const [loading, setLoading] = useState(false);
  const formikRef = useRef();

  useEffect(() => {
    console.log('token', route?.params?.token);
  }, []);

  const handleSubmit = values => {
    console.log('ONCLICK==> ', values);
    setLoading(true);
    try {
      const kidData = new FormData();
      const petData = new FormData();
      kidData.append('kid[name]', values.kidName);
      kidData.append('kid[age]', values.kidAge);
      petData.append('pet[name]', petName);
      petData.append('pet[breed]', 'TestBreed');

      const cbSuccess = res => {
        console.log('res', res);
        setLoading(false);
      };
      const cbFailure = err => {
        Alert.alert(err);
        setLoading(false);
      };
      dispatch(addKidRequest(token, kidData, cbSuccess, cbFailure));
      if (petName) {
        dispatch(addPetRequest(token, petData, cbSuccess, cbFailure));
      }
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
        {/* Signup Inputs */}
        <Formik
          innerRef={formikRef}
          initialValues={Addkiddsfield}
          onSubmit={values => handleSubmit(values)}
          validationSchema={AddKiddsVS}>
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
                  title={'Personal Information'}
                  subtitle={'Put information to get best experience'}
                />
                <View style={styles.aiFlexEnd}>
                  <SmallButton title={'Add More Kid'} />
                </View>

                {/* {Add kids} */}

                <AddMoreKid
                  onBlurKidAge={() => setFieldTouched('kidAge')}
                  onBlurKidName={() => setFieldTouched('kidName')}
                  onChangeTextKidAge={handleChange('kidAge')}
                  onChangeTextKidname={handleChange('kidName')}
                  kidNameValue={values.kidName}
                  kidAgeValue={values.kidAge}
                  touchedKidName={touched.kidName}
                  touchedKidAge={touched.kidAge}
                  kidAgeError={errors.kidAge}
                  kidNameError={errors.kidName}
                />
                <View style={styles.aiFlexEnd}>
                  <SmallButton title={'Add More Pet'} />
                </View>
                <View style={styles.boxContainer}>
                  <AppInput
                    placeholder={'Pets (Optional)'}
                    placeholderTextColor={colors.g2}
                    value={petName}
                    onChangeText={text => setpetName(text)}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    onPressBtn={handleSubmit}
                    bgColor={colors.b_gradient}
                    textColor={colors.white}
                    btnText={'Submit'}
                    Loading={loading}
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

export default AddPersonalInfo;
