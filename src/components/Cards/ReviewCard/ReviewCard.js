import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  appIcons,
  appImages,
  colors,
  family,
  size,
} from '../../../shared/exporter';
import {Rating} from 'react-native-elements';

export const ReviewCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.ovalCon}>
          <Image style={styles.imgStyle} source={appImages.workingMom} />
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.titleStyle}>Lorem ipsum</Text>
        <Text style={styles.subTitleStyle}>Month ago</Text>
        <Rating
          type="custom"
          ratingImage={appIcons.star}
          ratingColor={colors.white2}
          ratingBackgroundColor={colors.white2}
          ratingCount={5}
          imageSize={18}
        />
        <Text style={styles.para} numberOfLines={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          vestibulum faucibus tincidunt turpis laoreet. Viverra rhoncus non
          fames amet massa, semper et massa.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  firstContainer: {
    width: '20%',
    height: 130,
  },
  secondContainer: {
    width: '80%',
    alignItems: 'flex-start',
  },
  ovalCon: {
    height: 55,
    width: 55,
    borderRadius: 55,
    backgroundColor: colors.g2,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  subTitleStyle: {
    color: colors.g1,
    fontSize: size.xxtiny,
    paddingVertical: 5,
    fontFamily: family.Ubuntu_Light,
  },
  para: {
    color: colors.b1,
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxtiny,
    paddingVertical: 5,
    lineHeight: 14,
  },
});
