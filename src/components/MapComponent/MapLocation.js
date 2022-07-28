import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {colors, size, WP, scrHeight, appIcons} from '../../shared/exporter';
import RBSheet from 'react-native-raw-bottom-sheet';
import BackArrow from 'react-native-vector-icons/AntDesign';
import {location_list} from '../../shared/utilities/constant';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInput, Button} from '../../components';
export const MapLocation = ({backIcon, onPressBack, tabRef, title}) => {
  const [isActive, setActive] = useState(null);
  return (
    <>
      <View style={styles.container}>
        {backIcon && (
          <TouchableOpacity onPress={onPressBack} style={styles.arrowStyle}>
            <BackArrow name={'left'} size={20} color={colors.b1} />
          </TouchableOpacity>
        )}
        <Text style={styles.textStyle}>{title}</Text>
      </View>
      <RBSheet
        ref={tabRef}
        height={scrHeight / 1.2}
        openDuration={250}
        customStyles={{
          container: styles.container1,
          wrapper: {
            backgroundColor: 'transparent',
          },
        }}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerStyle}>
            <Image source={appIcons.location} style={styles.imageStyle} />
            <Text style={[styles.title, {marginTop: WP(8)}]}>
              Lorem Ispum is simply dummy
            </Text>
          </View>
          <Text style={styles.subTitle}>
            B-374 Lorem Ispum is simply dummy text of the printing and
            typesetting industry
          </Text>
          <Text style={[styles.title, {marginTop: WP(3)}, {marginLeft: WP(6)}]}>
            Save this address as
          </Text>

          {/* list */}
          <View style={styles.Liststyle}>
            <FlatList
              // showsVerticalScrollIndicator={false}
              numColumns={4}
              data={location_list}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setActive(index);
                    }}
                    style={[
                      styles.Button,
                      {borderColor: index === isActive ? 'white' : 'black'},
                    ]}>
                    <LinearGradient
                      colors={colors.b_gradient}
                      style={styles.gradientStyle}
                      start={{x: 0, y: 1}}
                      end={{x: 0, y: 0}}>
                      <Text
                        style={{
                          color: index === isActive ? 'white' : 'black',
                        }}>
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* Add Address */}
          <Text style={[styles.title, {marginLeft: WP(6)}]}>Add Address</Text>

          {/* Card */}

          <View style={styles.boxContainer}>
            <AppInput
              placeholder={'House/Flat/Block No.'}
              placeholderTextColor={colors.g2}
            />
            <AppInput
              placeholder={'Apartment/Road/Area'}
              placeholderTextColor={colors.g2}
            />
            <TextInput
              style={[styles.inputStyle]}
              placeholder={'Direction to reach'}
              placeholderTextColor={colors.g2}
              onChangeText={text => {
                console.log(text);
              }}
              mode={'outlined'}
              outlineColor={colors.g2}
              activeOutlineColor={colors.p1}
              theme={{roundness: 10}}
              dense={true}
              multiline={true}
            />
            <Button
              // onPressBtn={() => {
              //   navigation?.navigate('TrackingDetail');
              // }}
              bgColor={colors.b_gradient}
              textColor={colors.white}
              btnText={'Submit'}
            />
          </View>
        </KeyboardAwareScrollView>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('18'),
    justifyContent: 'flex-end',
    position: 'absolute',
    flexDirection: 'row',
  },
  contentContainer: {
    paddingVertical: WP('3'),
    paddingHorizontal: WP('4'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageStyle: {
    height: 36,
    resizeMode: 'contain',
    width: WP('19'),
    marginTop: WP(7),
  },
  headerStyle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
    marginRight: WP(10),
  },
  textStyle: {
    position: 'absolute',
    left: 70,
    top: 57,
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  subTitle: {
    maxWidth: WP(80),
    marginLeft: WP(6),
    marginTop: WP(1),
  },
  container1: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    // backgroundColor: colors.white,
    height: WP(115),
    width: WP(100),
    overflow: 'hidden',
  },
  arrowStyle: {
    top: 60,
    left: 15,
  },
  gradientStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WP('-4'),
  },
  Button: {
    height: WP(10),
    width: WP(22),
    borderRadius: 30,
    elevation: 5,
    // borderWidth: 0.5,
    shadowOpacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: WP(2.5),
    marginTop: WP(2),
    overflow: 'hidden',
  },
  Liststyle: {
    height: WP(15),
    width: WP(100),
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  boxContainer: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 20,
    shadowColor: colors.box_shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 8,
    overflow: 'hidden',
  },
  inputStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    paddingHorizontal: WP('3'),
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: WP('2'),
    height: 150,
    borderRadius: 10,
  },
});
