import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import MyStatusBar from '../../components/Bar/MyStatusBar';
import {colors} from '../../shared/exporter';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      // navigation.replace('Auth');
      navigation.navigate('Walkthrough');
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
