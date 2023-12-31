import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {colors, family, size, WP, appIcons} from '../../../shared/exporter';
import {TextInput} from 'react-native-paper';
export const AddressesCard = ({
  item,
  width,
  icon,
  editable,
  onPress,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={[styles.container, {width: width ? WP(28) : width}]}>
      <View style={[styles.leftContainer, {padding: icon ? WP('7') : 0}]}>
        <Text style={styles.titleStyle}>{item?.title}</Text>
        <TextInput
          style={[styles.inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={colors.g1}
          onChangeText={onChangeText}
          theme={{colors: {text: 'black', primary: colors}}}
          dense={true}
          multiline={true}
          editable={editable}
          value={value}
          underlineColor="transparent"
        />
      </View>
      {icon ? (
        <View style={styles.rightContainer}>
          <TouchableOpacity>
            <Image source={appIcons.added} style={styles.addCon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={appIcons.delete} style={styles.deleteCon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={appIcons.share} style={styles.shareCon} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={[styles.rightContainer2]} onPress={onPress}>
          <Image source={appIcons.added} style={styles.addCon2} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: WP('1'),
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#00000050',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 8,
    elevation: Platform.OS == 'ios' ? 0 : 5,
    margin: 6,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  leftContainer: {
    width: '80%',
  },
  rightContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rightContainer2: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    marginVertical: WP('0.6'),
  },
  subTitle: {
    fontSize: size.xxxtiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
  addCon: {
    height: 15,
    width: 15,
    top: 5,
  },
  deleteCon: {
    height: 15,
    width: 15,
    tintColor: colors.b1,
  },
  shareCon: {
    height: 10,
    width: 10,
    bottom: 5,
  },
  addCon2: {
    height: 15,
    width: 15,
  },
  inputStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    backgroundColor: colors.white,
    paddingHorizontal: WP('-1'),
    paddingVertical: WP('1'),
    width: WP('80'),
    height: 0,
  },
});
