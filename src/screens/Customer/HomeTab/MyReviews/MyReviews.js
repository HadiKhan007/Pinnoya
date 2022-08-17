import {
  FlatList,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {AppHeader, ReviewCard, SerachBar} from '../../../../components';
import styles from './styles';
import SearchBarIcon from 'react-native-vector-icons/Ionicons';
import {colors, appIcons} from '../../../../shared/exporter';
import {Menu, MenuItem} from 'react-native-material-menu';
const MyReviews = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const hideItemClick = () => {
    setShowMenu(false);
  };
  const seeAllItemClick = () => {
    setShowMenu(false);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <AppHeader
        backIcon={true}
        title={'My Reviews'}
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
              data={[1, 2, 3, 4, 5]}
              renderItem={({item}) => {
                return (
                  <View>
                    <ReviewCard />
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

export default MyReviews;
