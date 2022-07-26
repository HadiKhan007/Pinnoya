import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  appImages,
  appLogos,
  colors,
  family,
  size,
  WP,
  scrHeight,
  appIcons,
} from '../../shared/exporter';
import RBSheet from 'react-native-raw-bottom-sheet';
import MyStatusBar from '../Bar/MyStatusBar';
import CrossIcon from 'react-native-vector-icons/Entypo';
import MapView from 'react-native-maps';
import {List} from 'react-native-paper';
import BackArrow from 'react-native-vector-icons/AntDesign';
import {AppHeader} from '../Header/AppHeader';
export const MapLocation = ({
  modalRef,
  backIcon,
  onPressBack,
  tabRef,
  onPressClose,
}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{flex: 1}}></MapView>
        <View style={styles.container}>
          {backIcon && (
            <TouchableOpacity onPress={onPressBack} style={styles.arrowStyle}>
              <BackArrow name={'left'} size={20} color={colors.b1} />
            </TouchableOpacity>
          )}
          <Text style={styles.textStyle}>Set Location</Text>
        </View>
        <RBSheet
          ref={tabRef}
          height={scrHeight / 1.2}
          openDuration={250}
          customStyles={{
            container: styles.container1,
            wrapper: {
              backgroundColor: 'transparent',
            },
          }}>
          <View style={styles.headerStyle}>
            <Image source={appIcons.location} style={styles.imageStyle} />
            <Text style={[styles.title, {marginTop: WP(8)}]}>
              Lorem Ispum is simply dummy
            </Text>
          </View>
          <Text style={styles.subTitle}>
            B-374 Lorem Ispum is simply dummy text of the printing and
            typesetting industry
          </Text>
          <Text style={[styles.title, {marginTop: WP(3)}, {marginLeft: WP(6)}]}>
            Save this address as
          </Text>
          <View
            style={{
              height: WP(20),
              width: WP(100),
              backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: WP('12'),
                width: WP('25'),
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: WP(7),
                borderRadius: 34,
              }}>
                
              </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    height: WP('18'),
    justifyContent: 'flex-end',
    position: 'absolute',
    flexDirection: 'row',
  },
  contentContainer: {
    paddingVertical: WP('3'),
    paddingHorizontal: WP('4'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftCon: {},
  imageStyle: {
    height: 36,
    resizeMode: 'contain',
    width: WP('19'),
    marginTop: WP(7),
  },
  headerStyle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
    marginRight: WP(10),
  },
  textStyle: {
    position: 'absolute',
    left: 70,
    top: 57,
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  subTitle: {
    maxWidth: WP(80),
    marginLeft: WP(6),
    marginTop: WP(1),
  },
  container1: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    // backgroundColor: colors.white,
    height: WP(115),
    width: WP(100),
    overflow: 'hidden',
  },
  aiEnd: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  hitSlop: {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  },
  arrowStyle: {
    top: 60,
    left: 15,
  },
});
