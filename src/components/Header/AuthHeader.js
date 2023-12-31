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
export const AuthHeader = ({
  backIcon,
  onPressBack,
  headerIcon,
  rightArea,
  subTitle,
  text,
}) => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.white} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
            {backIcon && (
              <TouchableOpacity onPress={onPressBack}>
                <BackArrow name={'left'} size={20} color={colors.b1} />
              </TouchableOpacity>
            )}
          </View>

          <View>
            {headerIcon && (
              <Image source={appLogos.logo} style={styles.imageStyle} />
            )}
          </View>

          <View>
            {rightArea && <Text style={styles.subText}>{subTitle}</Text>}
          </View>
          <View>
            <View>
              <Text style={styles.Text}>{text}</Text>
            </View>
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
  leftCon: {},
  imageStyle: {
    height: 36,
    resizeMode: 'contain',
    width: WP('60'),
  },
  subText: {
    fontSize: size.tiny,
    fontFamily: family.Ubuntu_Regular,
    color: colors.p1,
    left: 15,
  },
  Text: {
    fontSize: size.tiny,
    fontFamily: family.Ubuntu_Regular,
    color: colors.b1,
    right: 5,
  },
});
