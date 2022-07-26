import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import MyStatusBar from '../../components/Bar/MyStatusBar';
import {colors} from '../../shared/exporter';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      navigation.replace('App');
    }, 1500);
  };

  return (
    <>
      <MyStatusBar backgroundColor={colors.white} />
      <View style={styles.container}>
        <Text style={styles.title}>Pinoyaya</Text>
      </View>
    </>
  );
};

export default Splash;
