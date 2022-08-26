import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  HomeHeader,
  ServiceCard,
  ServiceDetailCard,
} from '../../../../components';
import styles from './styles';
import {appIcons} from '../../../../shared/exporter';
import {Menu, MenuItem} from 'react-native-material-menu';
const ServiceDetail = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const tabRef = useRef(null);
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
      <HomeHeader
        title={'Hello Alice,'}
        subtitle={'What service do you need?'}
      />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Choose part-time or full-services
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.SerText}>Service</Text>
          <View style={styles.firstCardContainer}>
            <ServiceCard
              item={{
                id: 1,
                title: 'Babysitter',
                subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
                img: appIcons.settings,
              }}
              imgStyle={styles.imageStyle}
              tabRef={tabRef}
              onPress={() => {
                tabRef.current.open();
              }}
            />
          </View>
        </View>

        <View style={styles.secondContentContainer}>
          <View style={styles.thirdContentContainer}>
            <Text style={styles.insTxt}>Instant service</Text>
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
              <TouchableOpacity style={styles.smbtnCon}>
                <Text style={styles.smText}>Price</Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation?.navigate('AvailServiceDetail');
                  }}>
                  <ServiceDetailCard title={'Hire'} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
    </SafeAreaView>
  );
};

export default ServiceDetail;
