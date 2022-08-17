import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {colors, family, size, WP} from '../../shared/exporter';
import {TextInput} from 'react-native-paper';
export const AppInput = ({
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
  width,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputStyle, {width: width ? width : null}]}
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
        outlineColor={colors.g2}
        activeOutlineColor={colors.p1}
        theme={{roundness: 10, colors: {text: 'black'}}}
        dense={true}
        onPressIn={onPressIn}
        right={
          rightIcon && <TextInput.Icon onPressIn={onPressIn} name={rightIcon} />
        }
      />
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
    fontSize: size.tiny,
    color: '#000000',
    paddingHorizontal: WP('3'),
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: 5,
  },

  errorStyle: {
    fontSize: size.xxxtiny,
    color: colors.p1,
    padding: 5,
    textAlign: 'right',
    fontFamily: family.Ubuntu_Light,
  },
});
