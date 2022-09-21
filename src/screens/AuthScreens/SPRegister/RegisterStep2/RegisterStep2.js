import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  colors,
  family,
  HP,
  SPRegisterStep2Fields,
  SPRegisterStep2VS,
  WP,
} from '../../../../shared/exporter';
import styles from './styles';
import {
  AppInput,
  AuthFooter,
  AuthHeader,
  AuthHeading,
  Button,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import MultiSelect from 'react-native-multiple-select';

const RegisterStep2 = ({navigation}) => {
  const items = [
    {
      id: 1,
      name: 'Baby sitter',
    },
    {
      id: 2,
      name: 'Senior caregiver',
    },
    {
      id: 3,
      name: 'Tutor',
    },
    {
      id: 4,
      name: 'Housekeeper',
    },
  ];
  const [selectedItems, setselectedItems] = useState([]);

  const onSelectedItemsChange = selectedItems => {
    console.log('SELECTED item ', selectedItems);
    setselectedItems(selectedItems);
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
        text={'of 4'}
      />
      <View style={styles.container}>
        {/* Signup Inputs */}
        <Formik
          initialValues={SPRegisterStep2Fields}
          onSubmit={values => {}}
          validationSchema={SPRegisterStep2VS}>
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
                {/* <AppInput
                  placeholder={'Gov ID'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('govtID')}
                  value={values.govtID}
                  onBlur={() => setFieldTouched('govtID')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.govtID}
                  error={errors.govtID}
                /> */}
                <AppInput
                  placeholder={'Phone Number'}
                  placeholderTextColor={colors.g2}
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  onBlur={() => setFieldTouched('phone')}
                  blurOnSubmit={false}
                  disableFullscreenUI={true}
                  autoCapitalize="none"
                  touched={touched.phone}
                  error={errors.phone}
                />
                <AppInput
                  placeholder={'Password'}
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
                <View
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#ccc',
                    marginTop: HP('1.5'),
                  }}>
                  <MultiSelect
                    // hideTags
                    tagBorderColor={colors.p1}
                    tagRemoveIconColor={colors.p1}
                    tagTextColor={colors.g2}
                    tagContainerStyle={{}}
                    items={items}
                    uniqueKey="id"
                    onSelectedItemsChange={selectedItems =>
                      onSelectedItemsChange(selectedItems)
                    }
                    fontFamily={family.Ubuntu_Regular}
                    selectedItems={selectedItems}
                    searchIcon={false}
                    selectText={'Choose services'}
                    searchInputPlaceholderText="Choose Services"
                    onChangeInput={text => console.log(text)}
                    selectedItemTextColor="#000"
                    selectedItemIconColor={colors.p1}
                    itemTextColor="#ccc"
                    displayKey="name"
                    hideSubmitButton
                    searchInputStyle={{
                      height: 50,
                    }}
                    styleMainWrapper={styles.styleMainWrapper}
                    styleDropdownMenu={styles.styleDropdownMenu}
                    styleDropdownMenuSubsection={{
                      borderColor: '#fff',
                    }}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    onPressBtn={() => {
                      navigation?.navigate('UploadDoc');
                    }}
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
