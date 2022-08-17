import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, size, WP} from '../../shared/exporter';
import {TextInput} from 'react-native-paper';

export const ChatInput = ({
  placeholder,
  placeholderTextColor,
  rightIcon,
  onPressIn,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        mode={'outlined'}
        outlineColor={colors.white}
        activeOutlineColor={colors.p1}
        theme={{roundness: 10, colors: {text: 'black'}}}
        dense={true}
        onPressIn={onPressIn}
        right={
          rightIcon && <TextInput.Icon onPressIn={onPressIn} name={rightIcon} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: 5,
  },
});
