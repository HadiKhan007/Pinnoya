import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const Button = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
      <Text>Button</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});
