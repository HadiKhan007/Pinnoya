import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {
  AppHeader,
  ServiceCard,
  ServiceDetailCard,
} from '../../../../components';
import styles from './styles';
import {appIcons, spacing} from '../../../../shared/exporter';
const ServiceDetail = ({navigation}) => {
  const tabRef = useRef(null);
  return (
    <>
      <AppHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
        title={'Find your babysitter'}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
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
          <FlatList
            style={spacing.mt10}
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
