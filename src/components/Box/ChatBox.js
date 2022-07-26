import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, family, size} from '../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';
import DoubleCheck from 'react-native-vector-icons/Ionicons';
export const ChatBox = ({messages, receiver}) => {
  return (
    <>
      <View
        style={[
          styles.container,
          {
            alignSelf: receiver ? 'flex-start' : 'flex-end',
          },
        ]}>
        <View style={[styles.boxStyle]}>
          <LinearGradient
            colors={receiver ? colors.db_gradient : colors.b_gradient}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            style={[
              styles.boxStyle,
              {
                padding: 20,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: receiver ? 12 : 0,
                borderBottomLeftRadius: receiver ? 0 : 12,
                backgroundColor: receiver ? colors.white : colors.p1,
                width: 'auto',
                marginRight: receiver ? 100 : 0,
                marginLeft: receiver ? 0 : 100,
                alignSelf: receiver ? 'flex-start' : 'flex-end',
              },
            ]}>
            <Text
              style={[
                styles.textStyle,
                {color: receiver ? colors.b1 : colors.white},
              ]}>
              {messages}
            </Text>
          </LinearGradient>
        </View>
      </View>
      <View
        style={[
          styles.aiRow,
          {
            justifyContent: receiver ? 'flex-start' : 'flex-end',
          },
        ]}>
        <Text style={[styles.timeStyle]}>10:20 AM</Text>
        {!receiver && (
          <DoubleCheck
            name={'md-checkmark-done-sharp'}
            size={16}
            color={colors.bl2}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: size.xsmall,
    fontFamily: family.Ubuntu_Regular,
  },
  boxStyle: {
    shadowColor: colors.box_shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  timeStyle: {
    fontSize: size.tiny,
    color: colors.g1,
    paddingHorizontal: 5,
  },
  aiRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
