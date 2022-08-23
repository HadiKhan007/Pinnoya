import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Button,
  Checkbox,
  DropDownInput,
  ListModal,
  MultiSliderComp,
  TitleHeading,
} from '../../../components';
import {
  cities,
  colors,
  spacing,
  WP,
  scrHeight,
  family,
  size,
  SpecialNeed_list,
} from '../../../shared/exporter';
import DelIcon from 'react-native-vector-icons/AntDesign';
import CrossIcon from 'react-native-vector-icons/Entypo';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import RBSheet from 'react-native-raw-bottom-sheet';

export const FilterServiceModal = ({tabRef, onPressCross, onPressBtn}) => {
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
    <SafeAreaView>
      <RBSheet
        ref={tabRef}
        height={scrHeight / 1.2}
        openDuration={250}
        customStyles={{
          container: styles.iconContainer,
          wrapper: styles.wrapper,
        }}>
        <View style={styles.container}>
          <View style={styles.firstContainer}></View>
          <View style={styles.secondContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.aiRow}>
                <TouchableOpacity>
                  <DelIcon name={'delete'} size={20} color={colors.b1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressCross}>
                  <CrossIcon name={'cross'} size={20} color={colors.b1} />
                </TouchableOpacity>
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
                  onPressBtn={onPressBtn}
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
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {backgroundColor: 'transparent'},
  iconContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
    height: WP(160),
    width: WP(100),
    overflow: 'hidden',
  },
  firstContainer: {
    flex: 0.02,
    paddingHorizontal: WP('4'),
    backgroundColor: colors.white,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('5'),
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1Style: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  headText: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  checkStyle: {
    color: colors.g1,
    fontSize: size.tiny,
    fontFamily: family.Ubuntu_Regular,
  },
  aiCenter: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
