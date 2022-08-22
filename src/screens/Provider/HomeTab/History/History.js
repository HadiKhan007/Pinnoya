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
import {AppHeader, HistoryCard, SerachBar} from '../../../../components';
import SearchBarIcon from 'react-native-vector-icons/Ionicons';
import {colors, appIcons, spacing} from '../../../../shared/exporter';
import {Menu, MenuItem} from 'react-native-material-menu';
import styles from './styles';
import {History_List} from '../../../../shared/utilities/constant';
const History = ({navigation}) => {
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
        title={'History'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
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
            <Text style={styles.alltxt}>Review</Text>
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
              data={History_List}
              renderItem={({item}) => {
                return (
                  <View style={spacing.mx1}>
                    <HistoryCard status={item.text} />
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default History;
