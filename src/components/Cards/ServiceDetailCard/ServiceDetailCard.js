import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../../shared/exporter';
import StarIcon from 'react-native-vector-icons/Ionicons';
import TickIcon from 'react-native-vector-icons/Feather';

export const ServiceDetailCard = ({
  title,
  subtitle,
  rating,
  hourly_rate,
  img,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.leftCon}>
        <TouchableOpacity style={styles.btnContainer} hitSlop={styles.hitSlop}>
          <Image style={styles.smIcon} source={appIcons.fillbookmark} />
        </TouchableOpacity>
        <Image style={styles.imageStyle} source={appIcons.photo} />
      </ImageBackground>
      <View style={styles.rightCon}>
        <View style={styles.aiRow}>
          <Text style={styles.titleStyle}>Lorem ipsum</Text>
          <TouchableOpacity style={styles.btnCon}>
            <TickIcon name="check" size={8} color={colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>
          Pellentesque in ipsum id orci porta dapibus
        </Text>
        <View style={styles.aiRow}>
          <Text style={styles.normal}>5.0</Text>
          <StarIcon name={'star'} color={colors.s1} />
        </View>
        <View style={styles.aiRowFlex}>
          <Text style={styles.h4}>₱5 / Hour</Text>
          <TouchableOpacity style={styles.smbtnCon}>
            <Text style={styles.smText}>Hire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginVertical: 10,
    flexDirection: 'row',
  },
  leftCon: {
    backgroundColor: colors.g3,
    width: '30%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  smIcon: {
    height: 12,
    width: 9,
    resizeMode: 'contain',
  },
  btnContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
  rightCon: {
    width: '70%',
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingVertical: 5,
  },
  subtitle: {
    fontSize: size.xxtiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
    paddingVertical: 5,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  normal: {
    fontFamily: family.Ubuntu_Bold,
    fontSize: size.tiny,
    color: colors.p1,
    paddingRight: 5,
    paddingVertical: 5,
  },
  btnCon: {
    backgroundColor: colors.bl1,
    height: 12,
    width: 12,
    borderRadius: 12,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h4: {
    fontSize: size.tiny,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  aiRowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smbtnCon: {
    backgroundColor: colors.p1,
    paddingHorizontal: WP('7'),
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  smText: {
    fontSize: size.tiny,
    color: colors.white,
    fontFamily: family.Ubuntu_Medium,
  },
});
