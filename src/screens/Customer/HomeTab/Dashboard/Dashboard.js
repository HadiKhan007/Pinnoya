import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  Button,
  HomeHeader,
  HomeModal,
  ServiceCard,
  AppLoader,
} from '../../../../components';
import {colors, spacing} from '../../../../shared/exporter';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSericeAction} from '../../../../redux/actions';

const Dashboard = ({navigation}) => {
  const [openModal, setopenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [serviceList, setServiceList] = useState([]);
  const {userInfo, token} = useSelector(state => state?.auth);
  useEffect(() => {
    getServiceList();
  }, []);

  const getServiceList = () => {
    try {
      setLoading(true);
      const cbSuccess = res => {
        setServiceList(res?.data);
        setLoading(false);
      };
      const cbFailure = err => {
        setLoading(false);
      };
      dispatch(getAllSericeAction(token, cbSuccess, cbFailure));
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <HomeHeader
        title={'Hello Alice,'}
        subtitle={'What service do you need?'}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
            Choose part-time or full-services
          </Text>
        </View>
        <View style={styles.secondContentContainer}>
          <Text style={styles.subtitle}>Services</Text>
          <View style={styles.listContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={serviceList?.data}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={spacing.mx1}
                    onPress={() => {
                      navigation.navigate('ServiceDetail', {
                        serviceId: item?.service?.id,
                        serviceType: item?.service?.service_type,
                      });
                    }}>
                    <ServiceCard
                      title={item?.service?.service_type}
                      subTitle={item?.service?.description}
                      source={item?.image}
                      item={item}
                      imgStyle={styles.imageStyle}
                    />
                  </TouchableOpacity>
                );
              }}
            />
            {/* <AppLoader loading={loading} /> */}

            {/* <Button
              onPressBtn={() => {
                // setopenModal(true);
                navigation?.navigate('Chat');
              }}
              bgColor={colors.b_gradient}
              btnText={'Instant services'}
              textColor={colors.white}
            />
            <Button
              onPressBtn={() => {
                // setopenModal(true);
                navigation?.navigate('FullTimeService');
              }}
              bgColor={colors.b_gradient}
              btnText={'Full Time Services'}
              textColor={colors.white}
            /> */}
          </View>
        </View>
      </View>
      <HomeModal
        show={openModal}
        onPressHide={() => {
          setopenModal(false);
        }}
        onPressBack={() => {
          setopenModal(false);
        }}
      />
    </>
  );
};

export default Dashboard;
