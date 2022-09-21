import React, {useRef, useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  HomeHeader,
  ServiceCard,
  ServiceDetailCard,
} from '../../../../components';
import styles from './styles';
import {appIcons} from '../../../../shared/exporter';
import {Menu, MenuItem} from 'react-native-material-menu';
import {
  getAllServiceProvidersAction,
  getAllSericeAction,
} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const ServiceDetail = ({navigation, route}) => {
  const tabRef = useRef(null);
  const {token} = useSelector(state => state?.auth);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serviceId, setserviceId] = useState(route?.params?.serviceId);
  const [serviceType, setserviceType] = useState(route?.params?.serviceType);

  const [serviceProviderList, setserviceProviderList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      var data = new FormData();

      var config = {
        method: 'get',
        url: `https://pinoyaya.herokuapp.com/api/v1//customers/service_providers/custom_service_providers?service_id=${serviceId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };

      const res = await axios(config);
      setserviceProviderList(res?.data?.data);
    } catch (error) {
      console.log('[err]', error);
    }
  };

  const hideItemClick = () => {
    setShowMenu(false);
  };

  const seeAllItemClick = () => {
    setShowMenu(false);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };
  const handleNavigation = item => {};

  return (
    <SafeAreaView style={styles.safeView}>
      <HomeHeader
        title={'Hello Alice,'}
        subtitle={'What service do you need?'}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Choose part-time or full-services..
        </Text>
      </View>
      {/* <View style={styles.contentContainer}>
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
        </View> */}

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
          data={serviceProviderList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ServiceItemDetail', {item: item});
                }}>
                <ServiceDetailCard
                  onPressHire={() =>
                    navigation.navigate('ServiceItemDetail', {item: item})
                  }
                  title={'Hire'}
                  name={
                    item?.service_provider?.first_name +
                    ' ' +
                    item?.service_provider?.last_name
                  }
                  rate={
                    item?.service_provider?.per_hour_rate
                      ? item?.service_provider?.per_hour_rate
                      : ' NA'
                  }
                  description={
                    item?.service_provider?.description
                      ? item?.service_provider?.description
                      : 'description'
                  }
                  ratting={
                    item?.service_provider?.ratting
                      ? item?.service_provider?.ratting
                      : '0'
                  }
                  isVerified={item?.service_provider?.is_verified}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ServiceDetail;
