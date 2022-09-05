import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {
  colors,
  family,
  profile_uri,
  size,
  WP,
  scrWidth,
  appIcons,
  booked_status_color,
  booked_status_text_color,
  scrHeight,
} from '../../../shared/exporter';
import {Menu, MenuItem} from 'react-native-material-menu';
export const ProviderNotificationCard = ({
  item,
  navigation,
  status,
  onPress,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const hideItemClick = () => {
    setShowMenu(false);
    setShowModal(true);
  };
  const seeAllItemClick = () => {
    setShowMenu(false);
    setShowModal(true);
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.leftCon}>
          <View style={styles.imageCon}>
            <Image style={styles.imageStyle} source={{uri: profile_uri}} />
          </View>
        </View>
        <View style={styles.centerCon}>
          <Text style={styles.h1}>Lorem ipsum</Text>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.statusStyle,
                {backgroundColor: booked_status_color(status)},
              ]}>
              <Text
                style={[
                  styles.textStyle,
                  {color: booked_status_text_color(status)},
                ]}>
                {status}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowMenu(true)}>
              <Image source={appIcons.circleAlert} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.menuContainer}>
              <Menu
                visible={showMenu}
                style={styles.menuStyle}
                onRequestClose={() => seeAllItemClick()}>
                <MenuItem
                  style={styles.menuItemStyle}
                  onPress={() => hideItemClick()}>
                  <Text style={styles.menuTextStyle}>
                    Pellentesque in ipsum id orci porta dapibus.
                  </Text>
                </MenuItem>
              </Menu>
            </View>
          </View>
          <Text numberOfLines={2} style={styles.h2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet, consectetur adipiscing elit.
          </Text>
        </View>
        <Text style={styles.h3}>1 min ago</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {flex: 1},
  container: {
    flexDirection: 'row',
    padding: WP('2'),
    marginVertical: WP('2'),
    backgroundColor: colors.white2,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftCon: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  centerCon: {
    paddingVertical: 4,
    width: '55%',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  imageCon: {
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: colors.g3,
  },
  h2: {
    fontSize: size.xxxtiny,
    fontFamily: family.Ubuntu_Light,
    color: colors.g1,
    marginTop: 5,
  },
  h1: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  h3: {
    color: colors.g4,
    fontSize: size.xxxtiny,
    fontFamily: family.Ubuntu_Regular,
    textAlign: 'left',
    marginHorizontal: WP('5'),
    marginVertical: WP('2'),
  },
  menuContainer: {
    width: '100%',
    backgroundColor: 'red',
    top: WP('-16'),
    marginHorizontal: WP('-5'),
  },
  menuStyle: {
    width: WP('50'),
    marginTop: 5,
    marginLeft: 4,
    borderRadius: 8,
    height: WP('12'),
  },
  menuItemStyle: {
    width: scrWidth / 2,
  },
  menuTextStyle: {
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
    color: colors.g1,
  },
  statusStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    borderRadius: 6,
    height: 18,
    marginTop: 5,
  },
  textStyle: {
    fontSize: size.xxxtiny,
    fontFamily: family.Ubuntu_Regular,
    color: colors.white,
  },
  icon: {
    height: WP('4'),
    width: WP('4'),
    marginHorizontal: WP('2'),
    marginVertical: WP('1'),
  },
});
