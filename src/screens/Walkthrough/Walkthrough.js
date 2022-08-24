import {View} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import {AuthHeader, Button, IntroSlider} from '../../components';
import {appImages, colors, scrWidth} from '../../shared/exporter';
import CarouselView from 'react-native-snap-carousel';
import {useDispatch, useSelector} from 'react-redux';
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
    image: appImages.pana,
  },
];
const Walkthrough = ({navigation}) => {
  const {userType} = useSelector(state => state.userType);
  const dispatch = useDispatch(null);
  const _carousel1 = useRef(null);

  const onSubmit = () => {
    dispatch({type: 'USER_TYPE_REQUEST', params: 'Customer'});
    navigation.navigate('Auth');
  };
  const onSubmitSignUp = () => {
    dispatch({type: 'USER_TYPE_REQUEST', params: 'Provider'});
    navigation.navigate('Auth');
  };
  //Welcome Cards
  const welcomeCards = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <IntroSlider item={item} index={index} />
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
          />
        </View>
        <View style={styles.secondContainer}>
          <Button
            bgColor={colors.b_gradient}
            btnText={'Find a Nanny'}
            textColor={colors.white}
            onPressBtn={() => onSubmit()}
          />
          <Button
            onPressBtn={() => onSubmitSignUp()}
            textColor={colors.p1}
            btnText={'Sign Up as a Nanny'}
          />
        </View>
      </View>
    </>
  );
};

export default Walkthrough;
