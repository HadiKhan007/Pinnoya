import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      navigation.replace('Auth');
    }, 2500);
  };

  return (
    <>
      <SafeAreaView>
        <Text>Splash</Text>
      </SafeAreaView>
    </>
  );
};

export default Splash;
