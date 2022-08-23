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
import {Button, Checkbox} from '../..';
import {colors, family, size, spacing, WP} from '../../../shared/exporter';

export const ServiceListModal = ({
  listRef,
  list,
  getValue,
  height,
  title,
  setToggleCheckBox,
  selectedService,
  onPress,
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
        <FlatList
          data={list}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.buttonContainer}
                onPress={() => StoreList(item)}>
                <Checkbox
                  checkSize={20}
                  toggleCheckBox={item?.id == selectedService.id ? true : false}
                  setToggleCheckBox={() => setToggleCheckBox(item)}
                />
                <Text>{item?.title}</Text>
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => {
            return <Divider style={[spacing.mx2]} color={colors.white3} />;
          }}
          showsVerticalScrollIndicator={false}
        />
        <Button
          onPressBtn={onPress}
          btnText={'Next'}
          bgColor={colors.b_gradient}
          textColor={colors.white}
        />
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
  gradientStyle: {
    width: '100%',
    height: '100%',
    paddingHorizontal: WP('4'),
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 5,
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
