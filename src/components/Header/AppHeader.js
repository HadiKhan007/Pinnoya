import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MyStatusBar from '../Bar/MyStatusBar';
import {
  appImages,
  appLogos,
  colors,
  family,
  size,
  WP,
} from '../../shared/exporter';
import BackArrow from 'react-native-vector-icons/AntDesign';
export const AppHeader = ({backIcon, onPressBack, title}) => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.white} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.leftCon}>
            {backIcon && (
              <TouchableOpacity
                onPress={onPressBack}
                style={styles.btnContainer}>
                <BackArrow name={'left'} size={22} color={colors.b1} />
              </TouchableOpacity>
            )}
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: WP('18'),
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingVertical: WP('3'),
    paddingHorizontal: WP('4'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: colors.b1,
    fontSize: size.xxlarge,
    fontFamily: family.Ubuntu_Medium,
  },
  btnContainer: {
    paddingRight: 20,
  },
});
