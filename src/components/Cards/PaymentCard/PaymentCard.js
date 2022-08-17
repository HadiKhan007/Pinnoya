import React, {useState} from 'react';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {View, StyleSheet, Text, Image} from 'react-native';
import {colors, size, WP, scrHeight, family} from '../../../shared/exporter';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AppInput, Checkbox, Button} from '../../../components';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export const PaymentCard = ({
  title,
  img,
  onPress,
  tabRef,
  onPressBtn,
  bankRef,
  PayRef,
  onPayPress,
}) => {
  const [checked, setchecked] = useState(false);
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Image source={img} style={styles.img} />
      </TouchableOpacity>
      <RBSheet
        ref={tabRef}
        height={scrHeight / 1.2}
        openDuration={250}
        customStyles={{
          container: styles.inputContentContainer,
          wrapper: styles.wrapper,
        }}>
        <KeyboardAwareScrollView>
          <View style={styles.borderStyle} />
          <View>
            <Text style={styles.header}>Card Number</Text>
            <AppInput
              placeholder={'Type here'}
              placeholderTextColor={colors.g2}
            />

            <Text style={styles.title1}>Name</Text>
            <AppInput
              placeholder={'Type here'}
              placeholderTextColor={colors.g2}
            />
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.title}>CVV</Text>
                <TextInput
                  style={[styles.inputStyle]}
                  placeholder={'. . .'}
                  placeholderTextColor={colors.g2}
                  onChangeText={text => {}}
                  mode={'outlined'}
                  outlineColor={colors.g2}
                  activeOutlineColor={colors.p1}
                  theme={{roundness: 10, colors: {text: 'black'}}}
                  dense={true}
                  multiline={true}
                />
              </View>
              <View>
                <Text style={styles.title1}>Expired</Text>
                <TextInput
                  style={[styles.inputStyle]}
                  placeholder={'----/----'}
                  placeholderTextColor={colors.g2}
                  onChangeText={text => {}}
                  mode={'outlined'}
                  outlineColor={colors.g2}
                  activeOutlineColor={colors.p1}
                  theme={{roundness: 10, colors: {text: 'black'}}}
                  dense={true}
                  multiline={true}
                />
              </View>
            </View>
            <Checkbox
              checkSize={14}
              toggleCheckBox={checked}
              setToggleCheckBox={() => {
                setchecked(!checked);
              }}
              title={'Save card information'}
            />
            <View style={styles.footer}>
              <Text style={styles.text}>₱00.00</Text>
            </View>
            {onPressBtn && (
              <View style={styles.aiCenter}>
                <Button
                  onPressBtn={onPressBtn}
                  bgColor={colors.b_gradient}
                  btnText={'Payment'}
                  textColor={colors.white}
                  width={'90%'}
                />
              </View>
            )}
          </View>
        </KeyboardAwareScrollView>
      </RBSheet>
      <RBSheet
        ref={bankRef}
        height={scrHeight / 1.2}
        openDuration={250}
        customStyles={{
          container: styles.inputContentContainer,
          wrapper: styles.wrapper,
        }}>
        <KeyboardAwareScrollView>
          <View style={styles.borderStyle} />
          <View>
            <Text style={styles.header}>Account Number</Text>
            <AppInput
              placeholder={'Type here'}
              placeholderTextColor={colors.g2}
            />

            <Text style={styles.title1}>Confirm account number</Text>
            <AppInput
              placeholder={'Type here'}
              placeholderTextColor={colors.g2}
            />
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.title}>Name</Text>
                <TextInput
                  style={[styles.inputStyle]}
                  placeholder={'. . .'}
                  placeholderTextColor={colors.g2}
                  onChangeText={text => {}}
                  mode={'outlined'}
                  outlineColor={colors.g2}
                  activeOutlineColor={colors.p1}
                  theme={{roundness: 10, colors: {text: 'black'}}}
                  dense={true}
                  multiline={true}
                />
              </View>
              <View>
                <Text style={styles.title1}>IFSC</Text>
                <TextInput
                  style={[styles.inputStyle]}
                  placeholder={'----/----'}
                  placeholderTextColor={colors.g2}
                  onChangeText={text => {}}
                  mode={'outlined'}
                  outlineColor={colors.g2}
                  activeOutlineColor={colors.p1}
                  theme={{roundness: 10, colors: {text: 'black'}}}
                  dense={true}
                  multiline={true}
                />
              </View>
            </View>
            <Checkbox
              checkSize={14}
              toggleCheckBox={checked}
              setToggleCheckBox={() => {
                setchecked(!checked);
              }}
              title={'Save card information'}
            />
            <View style={styles.footer}>
              <Text style={styles.text}>₱00.00</Text>
            </View>
            {onPressBtn && (
              <View style={styles.aiCenter}>
                <Button
                  onPressBtn={onPressBtn}
                  bgColor={colors.b_gradient}
                  btnText={'Payment'}
                  textColor={colors.white}
                  width={'90%'}
                />
              </View>
            )}
          </View>
        </KeyboardAwareScrollView>
      </RBSheet>
      <RBSheet
        ref={PayRef}
        height={scrHeight / 1.2}
        openDuration={250}
        customStyles={{
          container: styles.inputContentContainer,
          wrapper: styles.wrapper,
        }}>
        <View style={styles.borderStyle} />
        <View style={styles.footer2}>
          <Text
            style={[
              styles.text,
              {paddingHorizontal: WP('29'), paddingBottom: WP(5)},
            ]}>
            ₱00.00
          </Text>
          {onPressBtn && (
            <Button
              onPressBtn={onPayPress}
              bgColor={colors.b_gradient}
              btnText={'Payment'}
              textColor={colors.white}
              width={'100%'}
            />
          )}
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: WP('90'),
    backgroundColor: colors.white,
    padding: WP('7'),
    borderRadius: 10,
    marginHorizontal: WP('5'),
    marginVertical: WP('2'),
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#00000050',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 0,
    elevation: Platform.OS == 'ios' ? 0 : 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP('91'),
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '15%',
    marginTop: 5,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: WP('4'),
  },

  footer2: {
    width: WP('90'),
    justifyContent: 'flex-end',
    paddingTop: WP('65'),
  },
  title: {
    color: colors.b1,
    fontSize: size.small,
    fontWeight: 'bold',
  },
  img: {
    height: 18,
    width: 18,
  },
  inputStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    paddingHorizontal: WP('3'),
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: WP('2'),
    width: 155,
    height: 30,
  },
  title1: {
    fontSize: size.medium,
    color: colors.b1,
    fontWeight: 'bold',
  },
  header: {
    fontSize: size.medium,
    color: colors.b1,
    fontWeight: 'bold',
    marginVertical: WP('3'),
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
  inputContentContainer: {
    flex: 1.2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white2,
    paddingHorizontal: WP('4'),
  },
  text: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.xxtitle,
  },
  aiCenter: {
    width: WP('100'),
    marginVertical: WP(5),
  },
});
