import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  appImages,
  booked_status_color,
  booked_status_text_color,
  colors,
  family,
  profile_uri,
  size,
  WP,
  appIcons,
} from '../../../shared/exporter';
import TickIcon from 'react-native-vector-icons/Feather';
import StarIcon from 'react-native-vector-icons/Ionicons';
import {Button} from '../../Button/Button';

export const AvailServiceCard = ({status, isBtn, onPressChat, onPressCall}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imgContainer}>
          <Image source={{uri: profile_uri}} style={styles.imgStyle} />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.aiRow}>
          <Text style={styles.titleStyle}>Lorem ipsum</Text>
          <View style={styles.btnCon}>
            <TickIcon name="check" size={6} color={colors.white} />
          </View>
        </View>
        {status && (
          <View
            style={[
              styles.statusStyle,
              {backgroundColor: booked_status_color(status)},
            ]}>
            <Text
              style={[
                styles.textStyle,
                {color: booked_status_text_color(status)},
              ]}>
              {status}
            </Text>
          </View>
        )}
        <Text style={styles.smallTxt}>
          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
        </Text>
        {isBtn && (
          <View style={styles.btnContanier}>
            <Button
              bgColor={colors.b_gradient}
              width={WP('25')}
              height={WP('10')}
              img={appIcons.message}
              textColor={colors.white}
              onPressBtn={onPressChat}
            />
            <Button
              bgColor={colors.b_gradient}
              width={WP('25')}
              height={WP('10')}
              img={appIcons.call}
              textColor={colors.white}
              onPressBtn={onPressCall}
            />
          </View>
        )}
        <View style={styles.aiRow}>
          <Text style={styles.normal}>5.0</Text>
          <StarIcon name={'star'} color={colors.s1} size={14} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: WP('32'),
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  leftContainer: {
    width: '40%',
    height: '100%',
  },
  rightContainer: {
    width: '60%',
    justifyContent: 'center',
  },
  imgContainer: {
    height: 124,
    width: 124,
    borderRadius: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g1,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnCon: {
    backgroundColor: colors.bl1,
    height: 8,
    width: 8,
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingVertical: 5,
  },
  smallTxt: {
    fontSize: size.xxxtiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Light,
    paddingVertical: 5,
  },
  normal: {
    fontSize: size.xsmall,
    color: colors.p1,
    fontFamily: family.Ubuntu_Bold,
    paddingRight: 5,
  },
  statusStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    borderRadius: 6,
    height: 18,
    marginTop: 5,
  },
  textStyle: {
    fontSize: size.xxxtiny,
    fontFamily: family.Ubuntu_Regular,
    color: colors.white,
  },
  btnContanier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
