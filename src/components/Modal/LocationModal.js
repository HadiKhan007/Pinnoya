import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';
import {TouchableOpacity} from 'react-native';

export const LocationModal = ({
  locationRef,
  title,
  subtitle,
  mile,
  title2,
  title3,
  subtitle2,
  subtitle3,
  price,
  hour,
  onPress,
}) => {
  return (
    <SafeAreaView>
      <RBSheet
        ref={locationRef}
        height={WP('20')}
        openDuration={250}
        customStyles={{
          container: styles.container,
          wrapper: styles.wapper,
        }}>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.milenoTxt}>{subtitle}</Text>
          <Text style={styles.miletxt}>{mile}</Text>
        </View>
        <View>
          <Text style={[styles.titleStyle]}>{title2}</Text>
          <Text style={styles.milenoTxt}>{subtitle2}</Text>
          <Text style={styles.miletxt}>{hour}</Text>
        </View>
        <View>
          <Text style={[styles.titleStyle]}>{title3}</Text>
          <Text style={styles.milenoTxt}>{subtitle3}</Text>
          <Text style={[styles.miletxt, {left: 55}]}>{price}</Text>
        </View>
      </RBSheet>
      <TouchableOpacity onPress={onPress} style={styles.markerStyle}>
        <Image source={appIcons.pointer} style={styles.pointerIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    height: WP('90'),
    resizeMode: 'contain',
    width: WP('100'),
  },
  titleStyle: {
    marginHorizontal: WP('3.5'),
    color: colors.b11,
    fontSize: size.tiny,
    fontFamily: family.Poppins_Regular,
  },
  subTitleStyle: {
    textAlign: 'center',
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
  wapper: {
    backgroundColor: 'transparent',
  },
  miletxt: {
    position: 'absolute',
    left: 60,
    top: 25,
    color: colors.b1,
    fontSize: size.small,
  },
  milenoTxt: {
    marginHorizontal: WP('5'),
    color: colors.p1,
    fontSize: size.large,
    fontWeight: 'bold',
    fontFamily: family.Poppins_Regular,
    top: 3,
  },
  markerStyle: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: 270,
    bottom: 40,
    backgroundColor: colors.p1,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: colors.b1,
  },
  pointerIcon: {
    height: 24,
    width: 24,
  },
});
