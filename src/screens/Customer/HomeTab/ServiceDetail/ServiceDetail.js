import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {
  AppHeader,
  HomeHeader,
  ServiceCard,
  ServiceDetailCard,
} from '../../../../components';
import styles from './styles';
import {appIcons, colors, size, spacing, WP} from '../../../../shared/exporter';
const ServiceDetail = ({navigation}) => {
  const tabRef = useRef(null);
  return (
    <>
      <HomeHeader
        title={'Hello Alice,'}
        subtitle={'What service do you need?'}
      />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Choose part-time or full-services
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: size.large,
              color: colors.b1,
              fontWeight: 'bold',
              // marginTop: WP(3),
            }}>
            Service
          </Text>
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
              <Image source={appIcons.droparrow} style={styles.dropImg} />

              <TouchableOpacity style={styles.smbtnCon}>
                <Text style={styles.smText}>Price</Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            // style={spacing.mt10}
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation?.navigate('ServiceItemDetail');
                  }}>
                  <ServiceDetailCard />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default ServiceDetail;
