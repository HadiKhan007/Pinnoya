import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../shared/exporter';
import RightArrow from 'react-native-vector-icons/AntDesign';
export const ArrowButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={colors.b_gradient}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={styles.g_style}>
        <RightArrow color={colors.white} name={'right'} size={20} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textColor: {},
  g_style: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
