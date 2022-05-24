import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {AuthHeader} from '../../components';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      navigation.replace('Walkthrough');
    }, 1500);
  };

  return (
    <>
      <AuthHeader />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Pinoyaya</Text>
        </View>
      </View>
    </>
  );
};

export default Splash;
