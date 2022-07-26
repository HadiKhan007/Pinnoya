import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors, family, size, WP} from '../../shared/exporter';

export const ListModal = ({listRef, list, getValue, height, title}) => {
  const StoreList = item => {
    if (getValue) {
      getValue(item);
    }
  };

  return (
    <RBSheet
      ref={listRef}
      height={height}
      openDuration={250}
      customStyles={{
        container: styles.container,
      }}>
      <LinearGradient
        colors={colors.b_gradient}
        style={styles.gradientStyle}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}>
        <Text style={styles.h1}>{title}</Text>
        <FlatList
          data={list}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.buttonContainer}
                onPress={() => StoreList(item)}>
                <Text style={styles.textStyle}>{item?.text}</Text>
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  gradientStyle: {
    width: '100%',
    height: '100%',
    paddingHorizontal: WP('4'),
    paddingVertical: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginVertical: 5,
  },
  textStyle: {
    color: colors.white,
    fontSize: size.h5,
    fontFamily: family.Ubuntu_Medium,
  },
  h1: {
    color: colors.white,
    fontSize: size.large,
    fontFamily: family.Ubuntu_Medium,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
