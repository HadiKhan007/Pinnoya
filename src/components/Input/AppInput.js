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
import UploadIcon from 'react-native-vector-icons/AntDesign';
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
        outlineColor={colors.g2}
        activeOutlineColor={colors.p1}
        theme={{roundness: 10}}
        dense={true}
        right={
          rightIcon && (
            <TextInput.Icon
              name={() => (
                <UploadIcon name={'upload'} size={20} color={colors.g2} />
              )}
            />
          )
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
    color: colors.g2,
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
