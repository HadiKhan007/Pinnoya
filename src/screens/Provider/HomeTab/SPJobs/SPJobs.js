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
import {AppHeader, SerachBar, ServiceDetailCard} from '../../../../components';
import SearchBarIcon from 'react-native-vector-icons/Ionicons';
import SearchBarSlider from 'react-native-vector-icons/Feather';
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
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
            <SerachBar
              placeholder={'Search'}
              placeholderTextColor={colors.g8}
              onPressIn={() => {}}
              rightIcon={() => (
                <SearchBarSlider name={'sliders'} size={25} color={colors.p1} />
              )}
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
      </View>
    </SafeAreaView>
  );
};
export default SPJobs;
