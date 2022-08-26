import React, {useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  AppHeader,
  FilterServiceModal,
  SerachBar,
  ServiceDetailCard,
} from '../../../../components';
import SearchBarIcon from 'react-native-vector-icons/Ionicons';

import {Menu, MenuItem} from 'react-native-material-menu';
import {
  colors,
  serviceList,
  appIcons,
  spacing,
} from '../../../../shared/exporter';
import styles from './styles';
const SPJobs = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const filterRef = useRef(null);
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
        title={'New Jobs'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.contentContainer}>
        <View>
          <SerachBar
            placeholder={'Search'}
            rightIcon={true}
            placeholderTextColor={colors.g8}
            leftIcon={() => (
              <SearchBarIcon
                name={'md-search-outline'}
                size={25}
                color={colors.g8}
              />
            )}
            onPress={() => {
              filterRef.current.open();
            }}
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
            showsVerticalScrollIndicator={false}
            data={serviceList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={spacing.mx1}
                  onPress={() => {
                    navigation?.navigate('ServiceDetail');
                  }}>
                  <ServiceDetailCard title={'Approve'} space />
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>
      <FilterServiceModal
        tabRef={filterRef}
        onPressCross={() => {
          filterRef.current.close();
        }}
        onPressBtn={() => {
          navigation.navigate('ServiceItemDetail');
        }}
      />
    </SafeAreaView>
  );
};
export default SPJobs;
