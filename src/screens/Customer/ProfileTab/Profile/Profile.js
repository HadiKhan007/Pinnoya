import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppHeader, ProfileBox, ProfileField} from '../../../../components';
import styles from './styles';
import {appIcons, edit_list, spacing} from '../../../../shared/exporter';
const Profile = ({navigation}) => {
  return (
    <>
      <AppHeader title={'Profile'} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.flex1}>
            <ProfileBox />
            <View style={styles.flex1}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={edit_list}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation?.navigate(item?.route);
                      }}>
                      <ProfileField
                        title={item.title}
                        img={item.img}
                        text={item?.text}
                      />
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

export default Profile;
