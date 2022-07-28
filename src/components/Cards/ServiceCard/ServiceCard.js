import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  colors,
  family,
  size,
  WP,
  scrHeight,
  appIcons,
} from '../../../shared/exporter';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AppHeader} from '../../Header/AppHeader';
import {AuthHeader} from '../../Header/AuthHeader';
import {AuthHeading} from '../../Headings/AuthHeading';
import {Service_List} from '../../../shared/utilities/constant';
export const ServiceCard = ({
  item,
  imgStyle,
  onPress,
  disabled,
  width,
  tabRef,
}) => {
  const [isActive, setActive] = useState(null);
  return (
    <>
      <View style={[styles.container, {width: width ? WP(40) : width}]}>
        <View style={styles.leftContainer}>
          <Text style={styles.titleStyle}>{item?.title}</Text>
          <Text style={styles.subTitle}>{item?.subtitle}</Text>
        </View>
        <TouchableOpacity
          style={styles.rightContainer}
          onPress={onPress}
          disabled={disabled}>
          <Image style={imgStyle} source={item?.img} />
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={tabRef}
        height={scrHeight / 1.2}
        openDuration={250}
        customStyles={{
          container: styles.iconContainer,
        }}>
        <AuthHeading title={'Select Services'} marginLeft={WP(35)} />
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Service_List}
            renderItem={({index, item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setActive(index);
                  }}
                  style={styles.contentContainer}>
                  <Image
                    source={
                      index === isActive ? appIcons.checked : appIcons.unChecked
                    }
                    style={styles.img}
                  />
                  <Text
                    style={{
                      color: index === isActive ? colors.b1 : colors.g1,
                      fontWeight: index === isActive ? 'bold' : 'normal',
                      marginLeft: WP(5),
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('25'),
    backgroundColor: colors.white,
    paddingHorizontal: WP('4'),
    justifyContent: 'center',
    width: '99%',
    borderRadius: 10,
    shadowColor: colors.box_shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 8,
    marginVertical: 8,
    flexDirection: 'row',
  },
  leftContainer: {
    justifyContent: 'center',
    width: '70%',
    height: '100%',
  },
  rightContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: size.xxxtiny,
    color: colors.g1,
    fontFamily: family.Ubuntu_Regular,
  },
  iconContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
    height: WP(80),
    width: WP(100),
    overflow: 'hidden',
  },
  listContainer: {height: WP(60), width: WP(100)},
  contentContainer: {
    height: WP(15),
    width: WP(75),
    paddingHorizontal: WP('5'),
    borderBottomColor: colors.g1,
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
