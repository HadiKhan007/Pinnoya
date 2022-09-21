import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {MyStatusBar} from '../../components';
import {colors} from '../../shared/exporter';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const {userInfo} = useSelector(state => state?.auth);
  const {userType} = useSelector(state => state?.userType);

  console.log('USERINFO.. ', userInfo);
  console.log('USERINFO.. ', userType);

  useEffect(() => {
    handleAppEntry();
  }, []);

  const handleAppEntry = async () => {
    setTimeout(() => {
      if (userInfo) {
        console.log('1');

        navigation.replace('App', {screen: 'Dashboard'});
      } else {
        console.log('2');
        navigation.navigate('Auth');
      }
      // navigation.navigate('App');
    }, 2500);
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
