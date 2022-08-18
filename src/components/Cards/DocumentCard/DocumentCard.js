import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, WP, family, size, appIcons} from '../../../shared/exporter';
export const DocumentCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Image source={appIcons.alertIcon} style={styles.imageStyle} />
        <Text style={[styles.btnText, {width: '65%', left: 10}]}>
          Document Verification is pending.
        </Text>
        <TouchableOpacity style={styles.touchable}>
          <Text style={[styles.btnText, {color: colors.r2}]}>VerifyNow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: WP('2.3'),
  },
  btnContainer: {
    width: WP('95'),
    height: WP('20'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C7130009',
    flexDirection: 'row',
    marginVertical: WP('3'),
    padding: WP('3'),
  },
  imageStyle: {
    height: 23,
    width: 23,
    resizeMode: 'contain',
    left: 3,
  },
  btnText: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    fontSize: size.xsmall,
  },
  touchable: {
    height: 36,
    width: 90,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.r2,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
