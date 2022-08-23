import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AppHeader,
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
  spacing,
  WP,
  scrHeight,
} from '../../../../shared/exporter';
import DelIcon from 'react-native-vector-icons/AntDesign';
import CrossIcon from 'react-native-vector-icons/Entypo';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {SpecialNeed_list} from '../../../../shared/utilities/constant';
import RBSheet from 'react-native-raw-bottom-sheet';

const FilterService = ({navigation, tabRef}) => {
  //References
  const servicelistRef = useRef(null);
  const citylistRef = useRef(null);
  const explisttRef = useRef(null);

  //States
  const [checked, setchecked] = useState(false);
  const [isActive, setActive] = useState(false);
  const [experience, setexperience] = useState('Yes');
  const [city, setCity] = useState('Select City');
  const [accomodation, setAccomodation] = useState(false);
  const [selectService, setSelectedService] = useState('Select Service');

  return (
    <>
      {/* <AppHeader
        backIcon={true}
        title={'Filter'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      /> */}
      <RBSheet
        ref={tabRef}
        height={scrHeight / 1.2}
        openDuration={250}
        customStyles={{
          container: styles.iconContainer,
        }}>
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
              {/* <View style={styles.aiRow}>
              <Text style={styles.h1Style}>Services </Text>
              <DropDownInput
                title={selectService?.title || selectService}
                width={'70%'}
                onPress={() => {
                  servicelistRef?.current?.open();
                }}
              />
            </View> */}
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
                  <TitleHeading title={'Childern Age'} />
                  <MultiSliderComp
                    value={[18, 65]}
                    onValuesChange={val => {}}
                    h1={'18'}
                    h2={'65'}
                    max={65}
                    min={18}
                  />
                  <TitleHeading title={'Price Rate'} />
                  <MultiSliderComp
                    value={[2, 50]}
                    onValuesChange={val => {}}
                    h1={'₱2'}
                    h2={'₱50'}
                    max={50}
                    min={2}
                  />
                  {/* <View style={styles.aiRow}>
                  <Text style={styles.h1Style}>Work Experience</Text>
                  <DropDownInput
                    width={'50%'}
                    title={experience}
                    onPress={() => {
                      explisttRef?.current?.open();
                    }}
                  />
                </View> */}
                  <View style={styles.aiRow}>
                    <Text style={styles.h1Style}>Special Needs</Text>
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
                  <View style={styles.aiRow}>
                    <Text style={styles.h1Style}>Lorem Epsom</Text>
                    <DropDownInput
                      width={'40%'}
                      title={'Lorem Epsum'}
                      icon={true}
                      onPress={() => {
                        // explisttRef?.current?.open();
                      }}
                    />
                  </View>
                  <Divider color={colors.white3} style={spacing.mt5} />
                  <TitleHeading
                    title={'Additional information'}
                    icon={true}
                    onPress={() => {
                      setActive(!isActive);
                    }}
                  />
                  {isActive && (
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
                  )}
                </View>
              )}
              <View style={styles.aiCenter}>
                <Button
                  onPressBtn={() => {
                    navigation.navigate('ServiceItemDetail');
                  }}
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
          list={SpecialNeed_list}
          height={WP('50')}
          title={'Select Options'}
          getValue={val => {
            setexperience(val?.text);
            explisttRef?.current?.close();
          }}
        />
        {/* <ServiceListModal
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
      /> */}
      </RBSheet>
    </>
  );
};

export default FilterService;
