import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../components';
import {
  appImages,
  appLogos,
  colors,
  family,
  size,
  WP,
} from '../../shared/exporter';
import BackArrow from 'react-native-vector-icons/AntDesign';
export const AppHeader = ({backIcon, onPressBack, title, rightArea}) => {
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
          {rightArea && (
            <View style={styles.rightCon}>
              <TouchableOpacity style={styles.rightBtnCon}>
                <Text style={styles.textStyle}>Reviewed all</Text>
              </TouchableOpacity>
            </View>
          )}
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
  rightCon: {},
  rightBtnCon: {
    backgroundColor: colors.p1,
    height: 30,
    paddingHorizontal: 15,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.white,
    fontSize: size.xsmall,
    fontFamily: family.Ubuntu_Medium,
  },
});
