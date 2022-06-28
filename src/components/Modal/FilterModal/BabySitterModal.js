import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Checkbox} from '../..';
import {colors, family, size, spacing, WP} from '../../../shared/exporter';

export const BabySitterModal = ({
  listRef,
  list,
  getValue,
  height,
  title,
  setToggleCheckBox,
  selectedService,
}) => {
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
      <View>
        <View style={styles.borderStyle} />
        <Text style={styles.h1}>{title}</Text>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
    padding: 10,
  },

  textStyle: {
    color: colors.white,
    fontSize: size.h5,
    fontFamily: family.Ubuntu_Medium,
  },
  h1: {
    color: colors.b1,
    fontSize: size.h3,
    fontFamily: family.Ubuntu_Medium,
    textAlign: 'center',
    paddingVertical: 10,
  },
  borderStyle: {
    borderWidth: 3,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '25%',
    marginTop: 5,
  },
});
