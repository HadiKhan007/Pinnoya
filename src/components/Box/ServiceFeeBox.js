import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TitleHeading} from '..';
import BetaHeading from '../Headings/BetaHeading';
import {colors, family, size, WP} from '../../shared/exporter';

export const ServiceFeeBox = ({onPressBtn}) => {
  return (
    <View>
      <TitleHeading title={'Payment'} />
      <BetaHeading title={'Service fee'} subtitle={'15%'} />
      <BetaHeading title={'Transportation fee'} subtitle={'₱00.00'} />
      <BetaHeading title={'VAT'} subtitle={'₱00.00'} />
      <View style={styles.boxContainer}>
        <View style={styles.borderStyle} />
        <Text style={styles.smTitle}>Proin eget tortor risus</Text>
        <Text style={styles.title}>₱00.00</Text>
      </View>
      <Button
        onPressBtn={onPressBtn}
        bgColor={colors.b_gradient}
        btnText={'Service Detail'}
        textColor={colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: '100%',
    backgroundColor: colors.white,
    shadowColor: colors.box_shadow,
    margin: WP('5'),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    padding: 20,
    height: 120,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: WP('5'),
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '15%',
    marginTop: 5,
  },
  smTitle: {
    fontSize: size.xxxtiny,
    color: colors.g1,
    marginVertical: 10,
  },
  title: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.xxtitle,
  },
});
