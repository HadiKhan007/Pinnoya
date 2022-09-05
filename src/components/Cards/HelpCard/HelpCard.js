import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, family, size, WP, appIcons} from '../../../shared/exporter';
import {TouchableOpacity} from 'react-native';
import BackArrow from 'react-native-vector-icons/AntDesign';
export const HelpCard = ({title, containerStyle, card, isActive}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.centerCon}>
        {card && <Text style={styles.h2}>Pending Amount</Text>}
        <Text style={styles.h1}>{title}</Text>
        {isActive && (
          <Text style={styles.h3}>
            Pellentesque in ipsum id orci porta dapibus.
          </Text>
        )}
      </View>
      <TouchableOpacity style={styles.rightCon}>
        {isActive ? (
          <Image source={appIcons.plus} style={styles.icon} />
        ) : (
          <BackArrow
            name={'left'}
            size={20}
            color={colors.b1}
            style={styles.arrowcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 18,
    justifyContent: 'space-evenly',
    marginHorizontal: WP('-1'),
  },
  centerCon: {
    width: WP('80'),
  },
  rightCon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowcon: {
    transform: [{rotateY: '180deg'}],
  },
  h1: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    marginHorizontal: WP('5'),
  },
  h2: {
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.tiny,
    color: colors.g1,
    marginHorizontal: WP('5'),
  },
  h3: {
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxxtiny,
    color: colors.g1,
    marginHorizontal: WP('5'),
  },
  icon: {
    height: WP('5'),
    width: WP('5'),
  },
});
