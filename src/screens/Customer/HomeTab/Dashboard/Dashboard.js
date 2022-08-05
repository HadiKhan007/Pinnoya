import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  Button,
  HomeHeader,
  HomeModal,
  ServiceCard,
} from '../../../../components';
import {
  colors,
  HP,
  serviceList,
  spacing,
  WP,
} from '../../../../shared/exporter';
const Dashboard = ({navigation}) => {
  const [openModal, setopenModal] = useState(false);
  // const isLandscape = WP > HP;
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
              // numColumns={Number(isLandscape) + 1}
              // key={Number(isLandscape)}
              data={serviceList}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={spacing.mx1}
                    onPress={() => {
                      navigation?.navigate('ServiceDetail');
                    }}>
                    <ServiceCard
                      item={item}
                      imgStyle={styles.imageStyle}
                      disabled={true}
                    />
                  </TouchableOpacity>
                );
              }}
            />

            <Button
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
            />
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
