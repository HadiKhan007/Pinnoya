import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../../shared/exporter';
import {TouchableOpacity} from 'react-native';
import BackArrow from 'react-native-vector-icons/AntDesign';
export const HelpCard = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerCon}>
        <Text style={styles.h1}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.rightCon}>
        <BackArrow
          name={'left'}
          size={20}
          color={colors.b1}
          style={styles.arrowcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
  },
  centerCon: {
    paddingVertical: 10,
    width: WP('80'),
  },
  rightCon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
  },
  arrowcon: {
    transform: [{rotateY: '180deg'}],
  },
  h1: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingHorizontal: WP('5'),
  },
});
