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
} from '../../../shared/exporter';
import {Menu, MenuItem} from 'react-native-material-menu';
import {Icon} from 'react-native-elements';
import {DeleteModal} from '../../Modal/DeleteModal';
export const NotificationCard = ({item, navigation}) => {
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
          <Image style={styles.imageStyle} source={{uri: profile_uri}} />
        </View>
        <View style={styles.centerCon}>
          <Text style={styles.h1}>Lorem ipsum</Text>
          <Text numberOfLines={2} style={styles.h2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet, consectetur adipiscing elit.
          </Text>
          <Text style={styles.h3}>1 min ago</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setShowMenu(true)}>
          <Icon
            type={'entypo'}
            name={'dots-three-vertical'}
            size={16}
            color={colors.b1}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <Menu
          visible={showMenu}
          style={styles.menuStyle}
          onRequestClose={() => seeAllItemClick()}>
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => hideItemClick()}>
            Delete
          </MenuItem>
          <MenuItem
            style={styles.menuItemStyle}
            textStyle={styles.menuTxtStyle}
            onPress={() => setShowMenu(false)}>
            Mark as read
          </MenuItem>
        </Menu>
      </View>
      <DeleteModal
        show={showModal}
        img={appIcons.delete}
        onPressBack={() => {
          setShowModal(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {flex: 1},
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 70,
    paddingHorizontal: WP('1'),
    paddingVertical: WP('2'),
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
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
  rightCon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    backgroundColor: 'red',
  },
  imageStyle: {
    height: '90%',
    width: '90%',
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
  },
  iconContainer: {
    right: 5,
    borderRadius: 7,
    width: WP('6.7'),
    height: WP('6.7'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.s4,
  },
  menuContainer: {
    width: '100%',
    top: WP('-15'),
    alignItems: 'flex-end',
    paddingRight: WP('5'),
    justifyContent: 'flex-end',
  },
  menuStyle: {
    marginTop: 5,
    marginLeft: 4,
    borderRadius: 8,
    height: WP('20'),
    width: scrWidth / 3.7,
  },
  menuItemStyle: {
    height: WP('8'),
  },
  menuTxtStyle: {
    left: -2,
    color: colors.b1,
    marginTop: WP('3.5'),
    fontSize: size.xsmall,
  },
  icon: {
    marginLeft: WP('15'),
    marginTop: WP('1'),
  },
});
