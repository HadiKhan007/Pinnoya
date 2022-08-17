import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP} from '../../shared/exporter';
import {AppInput} from '../../components';

export const ServiceInfoBox = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Service</Text>
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <Text style={styles.subtitle}>Place</Text>
          <View style={styles.spacing}>
            <AppInput
              placeholder={'Enter Place Here'}
              placeholderTextColor={colors.g1}
              width={WP(70)}
            />
          </View>
        </View>
        <View style={styles.inputStyle}>
          <Text style={styles.subtitle}>Date</Text>
          <View style={styles.spacing}>
            <AppInput
              placeholder={'Enter Date Here'}
              placeholderTextColor={colors.g1}
              width={WP(70)}
            />
          </View>
        </View>
        <View style={styles.inputStyle}>
          <Text style={styles.subtitle}>Time</Text>
          <View style={styles.spacing}>
            <AppInput
              placeholder={'Enter Time Here'}
              placeholderTextColor={colors.g1}
              width={WP(70)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '99%',
    padding: 1,
  },
  title: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  subtitle: {
    color: colors.b1,
    fontSize: size.normal,
    fontFamily: family.Ubuntu_Medium,
    marginTop: 28,
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP('80'),
  },
  spacing: {width: WP('62')},
});
