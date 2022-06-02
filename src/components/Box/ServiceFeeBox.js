import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TitleHeading} from '..';
import BetaHeading from '../Headings/BetaHeading';
import {colors, family, size, WP} from '../../shared/exporter';

export const ServiceFeeBox = ({onPressBtn}) => {
  return (
    <View>
      <BetaHeading title={'Service fee'} subtitle={'15%'} />
      <BetaHeading title={'Transportation fee'} subtitle={'₱00.00'} />
      <BetaHeading title={'VAT'} subtitle={'₱00.00'} />
      <View style={styles.boxContainer}>
        <View style={styles.borderStyle} />
        <Text style={styles.smTitle}>Proin eget tortor risus</Text>
        <Text style={styles.title}>₱00.00</Text>
      </View>
      {onPressBtn && (
        <View style={styles.aiCenter}>
          <Button
            onPressBtn={onPressBtn}
            bgColor={colors.b_gradient}
            btnText={'Service Detail'}
            textColor={colors.white}
            width={'99%'}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: '99%',
    backgroundColor: colors.white2,
    shadowColor: colors.box_shadow,
    margin: WP('5'),
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.5,
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
  aiCenter: {
    justifyContent: 'center',
  },
});
