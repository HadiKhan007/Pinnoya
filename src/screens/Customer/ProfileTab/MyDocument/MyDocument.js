import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {
  AddressesCard,
  AppHeader,
  HelpCard,
  UploadPicCard,
} from '../../../../components';
import {WP} from '../../../../shared/exporter';
import styles from './styles';
const MyDocument = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        backIcon={true}
        title={'Documents'}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <HelpCard
        isActive={true}
        containerStyle={styles.contentContainer}
        title={'Lorem ipsum dolor'}
      />
      <View style={styles.picContainer}>
        <UploadPicCard isActive={true} />
      </View>

      <HelpCard
        isActive={true}
        containerStyle={styles.contentContainer}
        title={'Lorem ipsum dolor'}
      />
      <View style={styles.picContainer2}>
        {[1, 2, 3].map(item => {
          return <UploadPicCard isActive={true} width={WP('28')} />;
        })}
      </View>
      <HelpCard
        isActive={true}
        containerStyle={styles.contentContainer}
        title={'Lorem ipsum dolor'}
      />
    </SafeAreaView>
  );
};
export default MyDocument;
