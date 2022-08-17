import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, size, WP} from '../../../shared/exporter';
import {TextInput} from 'react-native-paper';
export const TimeCard = ({Header, title, subtitle}) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Text style={style.header}>{Header}</Text>
      {/* HOUR AND MINUTE  */}
      <View style={style.container}>
        {/* HOUR */}
        <View style={style.contentContainer}>
          <TextInput
            style={[style.inputStyle, {marginHorizontal: WP('13')}]}
            placeholder={'00'}
            placeholderTextColor={colors.g2}
            onChangeText={text => {}}
            mode={'outlined'}
            outlineColor={colors.g2}
            activeOutlineColor={colors.p1}
            theme={{roundness: 10, colors: {text: 'black'}}}
            dense={true}
            multiline={true}
          />
          <Text style={style.title}>{title}</Text>
        </View>
        {/* : */}
        <Text style={style.colon}>:</Text>

        {/* MINUTE */}
        <View style={style.secondContentContainer}>
          <TextInput
            style={[style.inputStyle]}
            placeholder={'00'}
            placeholderTextColor={colors.g2}
            onChangeText={text => {}}
            mode={'outlined'}
            outlineColor={colors.g2}
            activeOutlineColor={colors.p1}
            theme={{roundness: 10, colors: {text: 'black'}}}
            dense={true}
            multiline={true}
          />
          <Text style={style.subtitle}>{subtitle}</Text>
        </View>

        <View style={style.thirdContentContainer}>
          <TouchableOpacity
            onPress={() => {
              setIndex(0);
            }}
            style={[
              style.touchable,
              {backgroundColor: index === 0 ? 'purple' : 'white'},
            ]}>
            <Text
              style={{
                color: index === 0 ? 'white' : 'black',
              }}>
              AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIndex(1);
            }}
            style={[
              style.touchable2,
              {backgroundColor: index === 1 ? 'purple' : 'white'},
            ]}>
            <Text
              style={{
                color: index === 1 ? 'white' : 'black',
              }}>
              PM
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  header: {
    fontSize: size.normal,
    color: colors.b1,
    fontWeight: 'bold',
    marginHorizontal: WP(5),
    borderBottomWidth: 1,
    borderBottomColor: colors.g3,
    marginTop: WP(3),
  },
  container: {
    flexDirection: 'row',
    width: WP(80),
  },
  contentContainer: {
    width: WP(35),
  },
  inputStyle: {
    fontSize: size.tiny,
    color: colors.b1,
    paddingHorizontal: WP('1'),
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: WP('2'),
    marginHorizontal: WP('9'),
    width: 50,
    height: 40,
  },
  title: {
    color: colors.g1,
    marginLeft: WP(15),
  },
  colon: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
    marginTop: WP(6),
  },
  secondContentContainer: {
    width: WP(30),
  },
  subtitle: {
    color: colors.g1,
    marginLeft: WP(10),
  },
  thirdContentContainer: {
    height: WP(14),
    width: WP(10),
    borderRadius: 10,
    marginTop: WP(3),
    overflow: 'hidden',
    borderColor: 'gary',
    borderWidth: 1,
    elevation: 5,
  },
  touchable: {
    height: WP(7),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.88,
    borderBottomWidth: 1,
    elevation: 5,
  },
  touchable2: {
    height: WP(7),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
