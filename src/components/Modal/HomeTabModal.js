import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  colors,
  family,
  scrHeight,
  size,
  spacing,
  tabArray,
  WP,
} from '../../shared/exporter';
import CrossIcon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
export const HomeTabModal = ({tabRef, title, subtitle, img, onPressClose}) => {
  return (
    <RBSheet
      ref={tabRef}
      height={scrHeight / 1.2}
      openDuration={250}
      customStyles={{
        container: styles.container,
      }}>
      <LinearGradient
        colors={colors.b_gradient}
        style={styles.gradientStyle}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}>
        <View style={styles.aiEnd}>
          <TouchableOpacity onPress={onPressClose} hitSlop={styles.hitSlop}>
            <CrossIcon name={'cross'} size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={tabArray}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.textContainer}>
                  <Text style={styles.titleStyle}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </LinearGradient>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: WP('2'),
    width: '100%',
  },
  listContainer: {
    marginVertical: WP('50'),
  },
  titleStyle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: size.h5,
    fontFamily: family.Ubuntu_Medium,
    marginVertical: 10,
  },
  aiEnd: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  gradientStyle: {
    width: '100%',
    height: '100%',
    paddingHorizontal: WP('4'),
  },
  hitSlop: {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  },
});