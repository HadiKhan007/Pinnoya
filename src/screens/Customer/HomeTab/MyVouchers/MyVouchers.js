import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {AppHeader, SerachBar, VoucherCard} from '../../../../components';
import SearchBarIcon from 'react-native-vector-icons/Ionicons';
import {colors, appIcons} from '../../../../shared/exporter';
import {Menu, MenuItem} from 'react-native-material-menu';
import styles from './styles';
const MyVouchers = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const hideItemClick = () => {
    setShowMenu(false);
  };
  const seeAllItemClick = () => {
    setShowMenu(false);
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'My Vouchers'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.contentContainer}>
        <View>
          <SerachBar
            placeholder={'Search'}
            placeholderTextColor={colors.g8}
            leftIcon={() => (
              <SearchBarIcon
                name={'md-search-outline'}
                size={25}
                color={colors.g8}
              />
            )}
          />
        </View>
      </View>

      <View style={styles.secondContentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.sortTxt}>Sort by :</Text>
          <Text style={styles.alltxt}>All</Text>
          <TouchableOpacity onPress={() => setShowMenu(true)}>
            <Image source={appIcons.droparrow} style={styles.dropImg} />
            <View style={styles.menuContainer}>
              <Menu
                visible={showMenu}
                style={styles.menuStyle}
                onRequestClose={() => setShowMenu(false)}>
                <MenuItem
                  style={styles.menuItemStyle}
                  textStyle={styles.menuTxtStyle}
                  onPress={() => hideItemClick()}>
                  Hide this ad
                </MenuItem>
                <MenuItem
                  style={styles.menuItemStyle}
                  textStyle={styles.menuTxtStyle}
                  onPress={() => seeAllItemClick()}>
                  See All
                </MenuItem>
              </Menu>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={[1, 2, 3]}
            renderItem={({item}) => {
              return (
                <View>
                  <VoucherCard />
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default MyVouchers;
