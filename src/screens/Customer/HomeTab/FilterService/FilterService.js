import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AppHeader,
  AppInput,
  AuthHeading,
  BabySitterModal,
  Button,
  Checkbox,
  DropDownInput,
  ListModal,
  MultiSliderComp,
  ServiceListModal,
  TitleHeading,
} from '../../../../components';
import styles from './styles';
import {
  cities,
  colors,
  filterServiceList,
  spacing,
  work_exp,
  WP,
} from '../../../../shared/exporter';
import DelIcon from 'react-native-vector-icons/AntDesign';
import CrossIcon from 'react-native-vector-icons/Entypo';
import {Divider} from 'react-native-elements/dist/divider/Divider';

const FilterService = ({navigation}) => {
  //References
  const servicelistRef = useRef(null);
  const citylistRef = useRef(null);
  const explisttRef = useRef(null);

  //States
  const [checked, setchecked] = useState(false);
  const [experience, setexperience] = useState('1-5 years');
  const [city, setCity] = useState('Select City');
  const [accomodation, setAccomodation] = useState(false);
  const [selectService, setSelectedService] = useState('Select Service');

  return (
    <>
      <AppHeader
        backIcon={true}
        title={'Filter'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.firstContainer}></View>
        <View style={styles.secondContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.aiRow}>
              <TouchableOpacity>
                <DelIcon name={'delete'} size={20} color={colors.b1} />
              </TouchableOpacity>
              <TouchableOpacity>
                <CrossIcon name={'cross'} size={20} color={colors.b1} />
              </TouchableOpacity>
            </View>
            <View style={styles.aiRow}>
              <Text style={styles.h1Style}>Services </Text>
              <DropDownInput
                title={selectService?.title || selectService}
                width={'70%'}
                onPress={() => {
                  servicelistRef?.current?.open();
                }}
              />
            </View>
            <View style={styles.aiRow}>
              <Text style={styles.h1Style}>City</Text>
              <DropDownInput
                title={city}
                width={'80%'}
                onPress={() => {
                  citylistRef?.current?.open();
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setchecked(!checked);
              }}
              style={styles.headText}>
              <Text style={styles.checkStyle}>Show next to me</Text>
              <Checkbox
                checkSize={18}
                toggleCheckBox={checked}
                setToggleCheckBox={() => {
                  setchecked(!checked);
                }}
              />
            </TouchableOpacity>
            <Divider color={colors.white3} style={spacing.mt5} />

            {checked && (
              <View>
                <TitleHeading title={'Age'} />
                <MultiSliderComp
                  value={[18, 65]}
                  onValuesChange={val => {
                  }}
                  h1={'18'}
                  h2={'65'}
                  max={65}
                  min={18}
                />
                <TitleHeading title={'Price Per Hour'} />
                <MultiSliderComp
                  value={[2, 50]}
                  onValuesChange={val => {
                  }}
                  h1={'₱2'}
                  h2={'₱50'}
                  max={50}
                  min={2}
                />
                <View style={styles.aiRow}>
                  <Text style={styles.h1Style}>Work Experience</Text>
                  <DropDownInput
                    width={'50%'}
                    title={experience}
                    onPress={() => {
                      explisttRef?.current?.open();
                    }}
                  />
                </View>
                <View style={styles.aiRow}>
                  <Text style={styles.h1Style}>Lorem Epsom</Text>
                  <DropDownInput
                    width={'50%'}
                    title={'Lorem Epsum'}
                    onPress={() => {
                      // explisttRef?.current?.open();
                    }}
                  />
                </View>
                <Divider color={colors.white3} style={spacing.mt5} />
                <TitleHeading title={'Accomodation'} />
                <View style={styles.aiRow}>
                  <Checkbox
                    checkSize={14}
                    toggleCheckBox={accomodation}
                    setToggleCheckBox={() => {
                      setAccomodation(!accomodation);
                    }}
                    title={'With accommodation'}
                  />
                  <Checkbox
                    checkSize={14}
                    toggleCheckBox={!accomodation}
                    setToggleCheckBox={() => {
                      setAccomodation(!accomodation);
                    }}
                    title={'With accommodation'}
                  />
                </View>
              </View>
            )}
            <View style={styles.aiCenter}>
              <Button
                onPressBtn={() => {}}
                bgColor={colors.b_gradient}
                textColor={colors.white}
                btnText={'Apply'}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <ListModal
        listRef={citylistRef}
        list={cities}
        height={WP('80')}
        title={'Select Cities'}
        getValue={val => {
          setCity(val?.text);
          citylistRef?.current?.close();
        }}
      />
      <ListModal
        listRef={explisttRef}
        list={work_exp}
        height={WP('120')}
        title={'Select years of experience'}
        getValue={val => {
          setexperience(val?.text);
          explisttRef?.current?.close();
        }}
      />
      <ServiceListModal
        listRef={servicelistRef}
        list={filterServiceList}
        height={WP('110')}
        title={'Select Services'}
        getValue={val => {
          setSelectedService(val);
          servicelistRef?.current?.close();
        }}
        setToggleCheckBox={item => {
          setSelectedService(item);
          servicelistRef?.current?.close();
        }}
        selectedService={selectService}
      />
    </>
  );
};

export default FilterService;
