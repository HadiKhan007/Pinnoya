import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../../shared/exporter';
import TickIcon from 'react-native-vector-icons/Feather';

export const PrimaryCard = ({status}) => {
  return (
    <View style={styles.container}>
      {status && (
        <View style={styles.availBtnCon}>
          <Text style={styles.availText}>{status}</Text>
        </View>
      )}
      <View style={styles.aiRowSpace}>
        <View style={styles.aiRow}>
          <Text style={styles.h1}>Irene foks</Text>
          <TouchableOpacity style={styles.btnCon}>
            <TickIcon name="check" size={8} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.h2}>Online</Text>
        </View>
        <View>
          <Image source={appIcons.fillbookmark} style={styles.smImgStyle} />
        </View>
      </View>
      <Text style={styles.paraStyle}>
        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
        ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: WP('2'),
  },
  availBtnCon: {
    paddingVertical: 6,
    width: WP('18'),
    backgroundColor: colors.gr1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  availText: {
    color: colors.white,
    fontSize: size.xxxtiny,
    fontFamily: family.Ubuntu_Regular,
    letterSpacing: 0.5,
  },
  btnCon: {
    backgroundColor: colors.bl1,
    height: 12,
    width: 12,
    borderRadius: 12,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiRowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  smImgStyle: {
    height: 12,
    width: 9,
    resizeMode: 'contain',
  },
  h1: {
    fontSize: size.xxlarge,
    fontFamily: family.Ubuntu_Medium,
    color: colors.b1,
  },
  h2: {
    fontSize: size.tiny,
    color: colors.g4,
    fontFamily: family.Ubuntu_Regular,
  },
  paraStyle: {
    fontSize: size.tiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
});
