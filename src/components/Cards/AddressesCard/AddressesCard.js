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
export const AddressesCard = ({item, width, icon, editable, onPress}) => {
  return (
    <View style={[styles.container, {width: width ? WP(30) : width}]}>
      <View style={styles.leftContainer}>
        <Text style={styles.titleStyle}>{item?.title}</Text>
        <TextInput
          style={[styles.inputStyle]}
          placeholder={'Pellentesque in ipsum id orci porta dapibus.'}
          placeholderTextColor={colors.g1}
          onChangeText={text => {}}
          mode={'flat'}
          outlineColor={colors.g2}
          activeOutlineColor={colors.p1}
          theme={{roundness: 10, colors: {text: 'black'}}}
          dense={true}
          multiline={true}
          editable={editable}
          activeUnderlineColor={colors.p1}
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
        <TouchableOpacity
          style={[styles.rightContainer, {paddingHorizontal: WP('3')}]}
          onPress={onPress}>
          <Image source={appIcons.added} style={styles.addCon2} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('20'),
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#00000050',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 3,
    elevation: Platform.OS == 'ios' ? 0 : 3,
    margin: 5,
    flexDirection: 'row',
  },
  leftContainer: {
    justifyContent: 'center',
    width: '80%',
    height: '100%',
    paddingHorizontal: WP('2'),
  },
  rightContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    marginBottom: 5,
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
    left: 20,
  },
  inputStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    backgroundColor: colors.white,
    paddingHorizontal: WP('-3'),
    height: 20,
  },
});
