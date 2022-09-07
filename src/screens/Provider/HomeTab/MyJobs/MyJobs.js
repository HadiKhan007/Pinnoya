import {FlatList, TouchableOpacity, View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  AppHeader,
  FourSegment2,
  ServiceDetailCard,
} from '../../../../components';
import {appIcons, spacing} from '../../../../shared/exporter';
import {Menu, MenuItem} from 'react-native-material-menu';
const MyJobs = ({navigation}) => {
  const [tabIndex, settabIndex] = useState(0);
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
    <>
      <AppHeader
        backIcon={true}
        title={'My Jobs'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={{flex: 1}}>
            <FourSegment2
              title1={'Pending'}
              title2={'On going'}
              title3={'Completed'}
              title4={'Cancelled'}
              subtitle1={'1'}
              subtitle2={'2'}
              subtitle3={'3'}
              subtitle4={'4'}
              index={tabIndex}
              setIndex={i => {
                settabIndex(i);
              }}
            />
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
              <FlatList
                style={spacing.mt2}
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4, 5]}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation?.navigate('BookedServiceDetail');
                      }}>
                      <ServiceDetailCard title={'Cancelled'} />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export default MyJobs;
