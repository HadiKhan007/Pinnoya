import {StyleSheet, Text, TouchableOpacity, View, Platform} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';
import {
  KeyboardAwareScrollView,
  KeyboardAwareSectionList,
} from 'react-native-keyboard-aware-scroll-view';

export const FourSegment2 = ({
  title1,
  title2,
  title3,
  title4,
  index,
  setIndex,
}) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.tab1}
          onPress={() => {
            setIndex(0);
          }}>
          <LinearGradient
            colors={index == 0 ? colors.b_gradient : colors.db_gradient}
            start={{x: 0, y: 1}}
            style={styles.g_tab1}
            end={{x: 0, y: 0}}>
            <Text
              style={[
                styles.textStyle,
                {
                  color: index == 0 ? colors.white : colors.b1,
                  fontFamily:
                    index == 0 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
                },
              ]}>
              {title1}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab2}
          onPress={() => {
            setIndex(1);
          }}>
          <LinearGradient
            colors={index == 1 ? colors.b_gradient : colors.db_gradient}
            start={{x: 0, y: 1}}
            style={[styles.g_tab2]}
            end={{x: 0, y: 0}}>
            <Text
              style={[
                styles.textStyle,
                {
                  color: index == 1 ? colors.white : colors.b1,
                  fontFamily:
                    index == 1 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
                },
              ]}>
              {title2}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab2}
          onPress={() => {
            setIndex(2);
          }}>
          <LinearGradient
            colors={index == 2 ? colors.b_gradient : colors.db_gradient}
            start={{x: 0, y: 1}}
            style={[styles.g_tab2]}
            end={{x: 0, y: 0}}>
            <Text
              style={[
                styles.textStyle,
                {
                  color: index == 2 ? colors.white : colors.b1,
                  fontFamily:
                    index == 2 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
                },
              ]}>
              {title3}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIndex(3);
          }}
          style={styles.tab3}>
          <LinearGradient
            colors={index == 3 ? colors.b_gradient : colors.db_gradient}
            start={{x: 0, y: 1}}
            style={[styles.g_tab3]}
            end={{x: 0, y: 0}}>
            <Text
              style={[
                styles.textStyle,

                {
                  color: index == 3 ? colors.white : colors.b1,
                  fontFamily:
                    index == 3 ? family.Ubuntu_Bold : family.Ubuntu_Regular,
                },
              ]}>
              {title4}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: WP('2'),
    flexDirection: 'row',
    marginVertical: WP('3'),
  },
  contentContainer: {
    width: '100%',
    height: '30%',
  },
  tab1: {
    width: WP('30'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab2: {
    width: WP('30'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab3: {
    width: WP('30'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.g1,
    fontSize: size.xxtiny,
    fontFamily: family.Ubuntu_Regular,
  },
  g_tab1: {
    width: WP('28'),
    padding: WP('3'),
    marginHorizontal: WP('3'),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 15,
    elevation: Platform.OS == 'ios' ? 0 : 10,
  },
  g_tab2: {
    width: WP('28'),
    padding: WP('3'),
    marginHorizontal: WP('3'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#00000040',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 15,
    elevation: Platform.OS == 'ios' ? 0 : 10,
  },
  g_tab3: {
    width: WP('28'),
    padding: WP('3'),
    marginHorizontal: WP('3'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#00000040',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 15,
    elevation: Platform.OS == 'ios' ? 0 : 10,
  },
});
