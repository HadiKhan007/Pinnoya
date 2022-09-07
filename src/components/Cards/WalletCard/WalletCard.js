import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {appImages, colors, family, size, WP} from '../../../shared/exporter';
import {Button} from '../../Button/Button';
export const WalletCard = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Image source={appImages.pana5} style={styles.imgCon} />
      <Text style={styles.text}>Current Balance</Text>
      <Text style={styles.text2}>₱00.00</Text>
      <Button
        bgColor={colors.b_gradient}
        btnText={'Withdraw'}
        textColor={colors.white}
        width={WP('75')}
        onPressBtn={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: WP('3'),
    backgroundColor: colors.white2,
    borderRadius: WP('5'),
    alignItems: 'center',
    elevation: 10,
    marginVertical: WP('3'),
    marginHorizontal: WP('5'),
  },
  imgCon: {
    height: WP('25'),
    width: WP('40'),
  },
  text: {
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
    color: colors.g1,
    textAlign: 'center',
    marginVertical: WP('3'),
  },
  text2: {
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.h1,
    textAlign: 'center',
    color: colors.b1,
  },
});
