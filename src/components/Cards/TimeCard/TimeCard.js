import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors, size, WP} from '../../../shared/exporter';
export const TimeCard = ({Header, title, subtitle}) => {
  const [index, setIndex] = useState(0);
  const [isActive, setActive] = useState(false);
  console.log('res---', isActive, index);
  return (
    <>
      <Text style={style.header}>{Header}</Text>
      {/* HOUR AND MINUTE  */}
      <View style={style.container}>
        {/* HOUR */}
        <View style={style.contentContainer}>
          <View
            style={[
              style.inputCOntainer,
              // {borderColor: isActive ? 'purple' : 'gary'},
            ]}>
            <TextInput
              placeholder="00"
              placeholderTextColor={colors.g1}
              // onBlur={() => setActive(true)}
              // onFocus={() => setActive(false)}
              outlineColor={colors.g2}
              activeOutlineColor={colors.p1}
              maxLength={24}
              style={{
                marginLeft: WP(1.5),
              }}
            />
          </View>
          <Text style={style.title}>{title}</Text>
        </View>
        {/* : */}
        <Text style={style.colon}>:</Text>

        {/* MINUTE */}
        <View style={style.secondContentContainer}>
          <View
            style={[
              style.inputContainer2,
              // {borderColor: isActive ? 'gary' : 'purple'},
            ]}>
            <TextInput
              placeholder="00"
              placeholderTextColor={colors.g1}
              // onBlur={() => setActive(true)}
              // onFocus={() => setActive(false)}
              outlineColor={colors.g2}
              activeOutlineColor={colors.p1}
              blurOnSubmit={false}
              maxLength={60}
              style={{
                marginLeft: WP(1.5),
              }}
            />
          </View>
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
  inputCOntainer: {
    width: WP(10),
    borderWidth: 1,
    backgroundColor: colors.white,
    elevation: 5,
    marginHorizontal: WP(15),
    marginTop: WP(3),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    //   backgroundColor: 'red',
  },
  inputContainer2: {
    width: WP(10),
    borderWidth: 1,
    marginHorizontal: WP(10),
    backgroundColor: colors.white,
    elevation: 5,
    marginTop: WP(3),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
