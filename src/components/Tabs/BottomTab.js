import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {appIcons, colors, family, HP, size, WP} from '../../shared/exporter';
import {HomeTabModal} from '../../components';

import LinearGradient from 'react-native-linear-gradient';
export const BottomTab = ({state, descriptors, navigation}) => {
  const tabref = useRef(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners &&
          keyboardEventListeners.forEach(eventListener =>
            eventListener.remove(),
          );
      }
    };
  }, []);

  return (
    <View
      style={{
        backgroundColor: colors.white2,
        display: visible ? 'flex' : 'none',
      }}>
      <View style={styles.container}>
        <LinearGradient
          colors={colors.b_gradient}
          style={styles.gradientStyle}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => {
              tabref.current.open();
            }}>
            <Image source={appIcons.tabIcon} style={styles.tabImageStyle} />
          </TouchableOpacity>
        </LinearGradient>
        <FlatList
          numColumns={4}
          data={state?.routes}
          renderItem={({item, index}) => {
            const {options} = descriptors[item?.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : item.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: item.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({name: item.name, merge: true});
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: item.key,
              });
            };
            return (
              <View style={styles.tabContainer}>
                <TouchableOpacity
                  onPress={onPress}
                  style={[styles.tabContainer]}>
                  <Image
                    source={
                      index == 0
                        ? appIcons.home
                        : index == 1
                        ? appIcons.myBooking
                        : index == 2
                        ? appIcons.notification
                        : index == 3
                        ? appIcons.user
                        : null
                    }
                    style={[
                      index == 0
                        ? styles.firstImageStyle
                        : index == 1
                        ? styles.secondImageStyle
                        : index == 2
                        ? styles.thirdImageStyle
                        : index == 3
                        ? styles.profileImageStyle
                        : null,
                      {
                        tintColor: isFocused ? colors.p1 : colors.g1,
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <HomeTabModal
        tabRef={tabref}
        onPressClose={() => {
          tabref?.current?.close();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'rgba(235, 235, 235, 0.204026)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  firstImageStyle: {
    height: 18,
    width: 20,
    resizeMode: 'contain',
  },

  secondImageStyle: {
    height: 15,
    width: 19,
    resizeMode: 'contain',
    left: -25,
  },
  thirdImageStyle: {
    height: 17,
    width: 18,
    resizeMode: 'contain',
    right: -25,
  },
  profileImageStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },

  tabImageStyle: {
    height: 12,
    width: 18,
    resizeMode: 'contain',
  },

  tabContainer: {
    height: 80,
    width: WP('25'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientStyle: {
    position: 'absolute',
    bottom: 55,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    shadowColor: 'rgba(148, 28, 107, 0.3)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 8,
  },
  btnContainer: {
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(148, 28, 107, 0.3)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
