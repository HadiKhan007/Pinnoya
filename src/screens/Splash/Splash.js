import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      navigation.replace('Walkthrough');
    }, 2500);
  };

  return (
    <>
      <SafeAreaView>
        <Text>Pinoyaya</Text>
      </SafeAreaView>
    </>
  );
};

export default Splash;
