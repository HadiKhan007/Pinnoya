import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';
import {MyStatusBar} from '../../components';

export const HomeHeader = ({title, subtitle}) => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.white} />
      <View style={styles.container}>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.subtitleStyle}>{subtitle}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
  },
  titleStyle: {
    fontSize: size.tiny,
    color: colors.g1,
    marginBottom: 10,
    fontFamily: family.Ubuntu_Regular,
  },
  subtitleStyle: {
    fontSize: size.xxlarge,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  leftContainer: {
    width: '80%',
  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon24: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});
