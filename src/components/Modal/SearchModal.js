import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors, family, size, WP} from '../../shared/exporter';
export const SearchModal = ({SearchRef, height}) => {
  return (
    <SafeAreaView>
      <RBSheet
        ref={SearchRef}
        height={height}
        openDuration={250}
        customStyles={{
          container: styles.container,
        }}>
        <View style={styles.borderStyle} />
        <Text style={styles.text}>information</Text>
        <Text style={styles.Search}>Searching</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
            sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit dolor sit amet, consectetur adipiscing
            elit
          </Text>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '15%',
    marginTop: 5,
  },
  textContainer: {
    padding: WP('4'),
  },
  text: {
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxxtiny,
    color: colors.g1,
    textAlign: 'center',
    marginVertical: WP('4'),
  },
  Search: {
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.large,
    color: colors.gr1,
  },
  text2: {
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.tiny,
  },
});
