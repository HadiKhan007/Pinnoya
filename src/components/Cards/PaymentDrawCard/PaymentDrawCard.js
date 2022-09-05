import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {colors, WP, family, size} from '../../../shared/exporter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInput, Checkbox, Button} from '../../../components';
import {TextInput} from 'react-native-paper';

export const PaymentDrawCard = ({onPress}) => {
  const [checked, setchecked] = useState(false);
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <View style={styles.btnContainer}>
          <Text style={[styles.btnText]}>Total Amount : ₱25.00</Text>
        </View>

        <View style={styles.inputContentContainer}>
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
                  placeholder={'Type here'}
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
                  placeholder={'Type here'}
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
            <Text style={[styles.title1, {marginVertical: WP('3')}]}>
              Withdraw Amount
            </Text>
            <AppInput
              placeholder={'Enter Amount'}
              placeholderTextColor={colors.g2}
            />
            <View style={styles.aiCenter}>
              <Button
                onPressBtn={onPress}
                bgColor={colors.b_gradient}
                btnText={'Withdraw'}
                textColor={colors.white}
                width={'90%'}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: WP('2.3'),
  },
  btnContainer: {
    width: WP('90'),
    height: WP('20'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.p8,
    flexDirection: 'row',
    marginVertical: WP('3'),
    padding: WP('3'),
    marginHorizontal: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP('91'),
  },
  inputContentContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white2,
    paddingHorizontal: WP('4'),
  },
  btnText: {
    color: colors.p1,
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.xxlarge,
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '15%',
    marginTop: 5,
  },
  header: {
    fontSize: size.medium,
    color: colors.b1,
    fontWeight: 'bold',
    marginVertical: WP('3'),
  },
  title1: {
    fontSize: size.medium,
    color: colors.b1,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: WP('4'),
  },
  title: {
    color: colors.b1,
    fontSize: size.small,
    fontWeight: 'bold',
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
  aiCenter: {
    width: WP('100'),
    marginHorizontal: WP('2'),
  },
});
