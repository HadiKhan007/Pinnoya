import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader, ReviewCard, SerachBar} from '../../../../components';
import styles from './styles';
import SearchBarIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../../shared/exporter';

const MyReviews = ({navigation}) => {
  return (
    <>
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
    </>
  );
};

export default MyReviews;
