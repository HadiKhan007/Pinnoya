import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyStatusBar from '../Bar/MyStatusBar';
import {colors, WP} from '../../shared/exporter';

export const AuthHeader = () => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.default_color} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          {/* <Text>AuthHeader</Text> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.default_color,
    height: WP('10'),
  },
  contentContainer: {
    paddingVertical: WP('3'),
    paddingHorizontal: WP('3'),
  },
});
