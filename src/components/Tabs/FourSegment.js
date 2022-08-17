import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';

export const FourSegment = ({
  title1,
  title2,
  title3,
  title4,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  index,
  setIndex,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab1}
        onPress={() => {
          setIndex(0);
        }}>
        <Text
          numberOfLines={1}
          style={[
            styles.textStyle,
            {
              color: index == 0 ? colors.p1 : colors.g1,
              fontFamily:
                index == 0 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
            },
          ]}>
          {title1}
        </Text>
        <LinearGradient
          colors={index == 0 ? colors.b_gradient : colors.half_white_gradient}
          start={{x: 0, y: 1}}
          style={styles.g_tab1}
          end={{x: 0, y: 0}}>
          <Text
            style={[
              styles.textStyle,
              {
                color: index == 0 ? colors.white : colors.g1,
                fontFamily:
                  index == 0 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
              },
            ]}>
            {subtitle1}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab2}
        onPress={() => {
          setIndex(1);
        }}>
        <Text
          numberOfLines={2}
          style={[
            styles.textStyle,
            {
              color: index == 1 ? colors.p1 : colors.g1,
              fontFamily:
                index == 1 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
            },
          ]}>
          {title2}
        </Text>
        <LinearGradient
          colors={index == 1 ? colors.b_gradient : colors.half_white_gradient}
          start={{x: 0, y: 1}}
          style={[styles.g_tab2]}
          end={{x: 0, y: 0}}>
          <Text
            style={[
              styles.textStyle,
              {
                color: index == 1 ? colors.white : colors.g1,
                fontFamily:
                  index == 1 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
              },
            ]}>
            {subtitle2}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab2}
        onPress={() => {
          setIndex(2);
        }}>
        <Text
          numberOfLines={1}
          style={[
            styles.textStyle,
            {
              color: index == 2 ? colors.p1 : colors.g1,
              fontFamily:
                index == 2 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
            },
          ]}>
          {title3}
        </Text>
        <LinearGradient
          colors={index == 2 ? colors.b_gradient : colors.half_white_gradient}
          start={{x: 0, y: 1}}
          style={[styles.g_tab2]}
          end={{x: 0, y: 0}}>
          <Text
            style={[
              styles.textStyle,
              {
                color: index == 2 ? colors.white : colors.g1,
                fontFamily:
                  index == 2 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
              },
            ]}>
            {subtitle3}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIndex(3);
        }}
        style={styles.tab3}>
        <Text
          numberOfLines={1}
          style={[
            styles.textStyle,
            {
              color: index == 3 ? colors.p1 : colors.g1,
              fontFamily:
                index == 3 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
            },
          ]}>
          {title4}
        </Text>
        <LinearGradient
          colors={index == 3 ? colors.b_gradient : colors.half_white_gradient}
          start={{x: 0, y: 1}}
          style={[styles.g_tab3]}
          end={{x: 0, y: 0}}>
          <Text
            style={[
              styles.textStyle,

              {
                color: index == 3 ? colors.white : colors.g1,
                fontFamily:
                  index == 3 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
              },
            ]}>
            {subtitle4}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  tab1: {
    width: WP('20'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab2: {
    width: WP('20'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab3: {
    width: WP('20'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.g1,
    fontSize: size.xxtiny,
    fontFamily: family.Ubuntu_Regular,
  },
  g_tab1: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  g_tab2: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  g_tab3: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
