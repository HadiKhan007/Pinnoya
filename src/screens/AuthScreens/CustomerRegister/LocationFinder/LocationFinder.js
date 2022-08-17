import React, {useRef} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {LocationModal, MapComponent} from '../../../../components';
import BackArrow from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {appIcons, colors} from '../../../../shared/exporter';
const LocationFinder = ({navigation}) => {
  const locationRef = useRef(null);
  return (
    <View style={styles.container}>
      <MapComponent />
      <TouchableOpacity
        style={styles.arrowStyle}
        onPress={() => {
          navigation?.goBack('Schedule');
        }}>
        <BackArrow name={'left'} size={20} color={colors.b1} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Image source={appIcons.checked} style={styles.checkedIcon} />
        <Image source={appIcons.dotted} style={styles.dotIcon} />
        <Image source={appIcons.location} style={styles.locationStyle} />
        <View style={styles.contentContainer2}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              navigation?.navigate('SetLocation', {
                name: 'Set Pickup Location',
              });
            }}>
            <Text style={styles.pickupText}>Pickup location</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={appIcons.cancel} style={styles.cancelIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate('SetLocation', {name: 'Set Drop Location'});
            }}>
            <Text style={styles.dropText}>Drop location</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={appIcons.swipe} style={styles.swipeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <LocationModal
        locationRef={locationRef}
        title={'Total distance'}
        title2={'Estimaated Time'}
        title3={'Estimaated Cost'}
        subtitle={'12.4'}
        subtitle2={'1.00'}
        subtitle3={'$50'}
        mile={'km'}
        hour={'hr'}
        price={'USD'}
        onPress={() => {
          locationRef.current.open();
        }}
      />
    </View>
  );
};
export default LocationFinder;
