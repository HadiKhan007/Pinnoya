import {
  FlatList,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  FavouriteCard,
  ServiceDetailCard,
} from '../../../../components';
import {Menu, MenuItem} from 'react-native-material-menu';
import {spacing, appIcons} from '../../../../shared/exporter';
const Favourite = ({navigation}) => {
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
        title={'Favourites'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <FavouriteCard />
      <View style={styles.secondContentContainer}>
        <View style={styles.textContanier}>
          <Text style={styles.srtxt}>Sort by:</Text>
          <Text style={styles.rewTxt}>Review</Text>
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
      </View>
      <View style={styles.contentContainer}>
        <View style={{flex: 1}}>
          <FlatList
            style={spacing.mt10}
            keyExtractor={(item, index) => item.key}
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation?.navigate('Home', {
                      screen: 'BookedServiceDetail',
                    });
                  }}>
                  <ServiceDetailCard title={'Hire'} space={true} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Favourite;
