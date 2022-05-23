import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {AuthHeader, Button, ImageBox, IntroSlider} from '../../components';
import {appImages, scrWidth} from '../../shared/exporter';
import CarouselView from 'react-native-snap-carousel';

const slides = [
  {
    key: 1,
    title: 'Welcome to Pinoyaya',
    title2:
      'Get a professional and caring nanny for your child and we will find the perfect match for your familys needs in no time',

    image: appImages.welcome1,
  },
  {
    key: 2,
    title: 'Vivamus suscipit tortor eget felis porttitor',
    title2:
      'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.',
    image: appImages.welcome1,
  },
];
const Walkthrough = () => {
  const [index, setIndex] = useState(0);
  const _carousel1 = useRef(null);
  //Welcome Cards
  const welcomeCards = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <IntroSlider item={item} />
      </View>
    );
  };
  return (
    <>
      <AuthHeader />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <CarouselView
            layout="default"
            inactiveSlideOpacity={1}
            ref={_carousel1}
            data={slides}
            renderItem={welcomeCards}
            sliderWidth={scrWidth}
            itemWidth={scrWidth}
            onSnapToItem={i => setIndex(i)}
          />
          <View style={{flex: 0.3}}>
            <Button />
          </View>
        </View>
      </View>
    </>
  );
};

export default Walkthrough;
