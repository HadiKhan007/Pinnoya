import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, family, size, WP} from '../../shared/exporter';
import {TextInput} from 'react-native-paper';
import SearchBarSlider from 'react-native-vector-icons/Feather';
export const SerachBar = ({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  value,
  onChangeText,
  onBlur,
  blurOnSubmit,
  disableFullscreenUI,
  autoCapitalize,
  onSubmitEditing,
  returnKeyType,
  touched,
  error,
  maxLength,
  editable,
  rightIcon,
  rightText,
  numberofLines,
  onPressIn,
  onPress,
  leftIcon,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        blurOnSubmit={blurOnSubmit}
        disableFullscreenUI={disableFullscreenUI}
        autoCapitalize={autoCapitalize}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        editable={editable}
        maxLength={maxLength}
        mode={'outlined'}
        outlineColor={colors.white2}
        activeOutlineColor={colors.p1}
        theme={{roundness: 10}}
        dense={true}
        onPressIn={onPressIn}
        left={
          leftIcon && <TextInput.Icon name={leftIcon} onPress={onPressIn} />
        }
      />
      {rightIcon && (
        <TouchableOpacity onPress={onPress}>
          <SearchBarSlider
            name={'sliders'}
            size={25}
            color={colors.p1}
            style={{
              position: 'absolute',
              left: 290,
              top: -38,
            }}
          />
        </TouchableOpacity>
      )}
      {touched && error && (
        <View>
          <Text style={styles.errorStyle}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: WP('2'),
  },

  inputStyle: {
    fontSize: size.xsmall,
    color: colors.g2,
    backgroundColor: colors.white2,
    justifyContent: 'center',
    paddingVertical: 5,
  },

  errorStyle: {
    fontSize: size.tiny,
    color: colors.p1,
    padding: 5,
    textAlign: 'right',
    fontFamily: family.Ubuntu_Light,
  },
});
